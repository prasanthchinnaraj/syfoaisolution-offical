import { useEffect } from 'react'

/**
 * Reveals any element with a reveal class (`.fade-in`, `.reveal-left`,
 * `.reveal-right`, `.reveal-zoom`) as it scrolls into view by adding the
 * `.visible` class. Re-runs whenever `deps` change (e.g. route changes)
 * so dynamically rendered nodes get observed.
 */
const SELECTOR = ['.fade-in', '.reveal-left', '.reveal-right', '.reveal-zoom']
  .map((cls) => `${cls}:not(.visible)`)
  .join(', ')

export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const fadeEls = document.querySelectorAll(SELECTOR)
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
