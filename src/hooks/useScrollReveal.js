import { useEffect } from 'react'

/**
 * Reveals any element with the `.fade-in` class as it scrolls into view
 * by adding the `.visible` class (mirrors the original IntersectionObserver).
 * Re-runs whenever `deps` change so dynamically rendered nodes get observed.
 */
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-in:not(.visible)')
    if (!fadeEls.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 70)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    fadeEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
