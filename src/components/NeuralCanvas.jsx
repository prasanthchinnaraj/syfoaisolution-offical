import { useEffect, useRef } from 'react'

export default function NeuralCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, nodes = [], raf

    function resize() {
      const hero = canvas.parentElement
      W = canvas.width = hero.offsetWidth
      H = canvas.height = hero.offsetHeight
    }

    function makeNode() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8,
        a: Math.random(),
      }
    }

    function init() {
      nodes = []
      const count = W < 640 ? 26 : W < 1024 ? 42 : 65
      for (let i = 0; i < count; i++) nodes.push(makeNode())
    }

    function tick() {
      ctx.clearRect(0, 0, W, H)
      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < -10) n.x = W + 10
        else if (n.x > W + 10) n.x = -10
        if (n.y < -10) n.y = H + 10
        else if (n.y > H + 10) n.y = -10

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,55,199,${0.5 * n.a})`
        ctx.fill()
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            const alpha = (1 - d / 130) * 0.18
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(30,91,255,${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(tick)
    }

    resize()
    init()
    tick()

    const onResize = () => {
      resize()
      init()
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas id="canvas-bg" ref={canvasRef} aria-hidden="true"></canvas>
}
