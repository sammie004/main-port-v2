import { useEffect, useRef } from 'react'

/**
 * Interactive dot-grid background.
 *
 * A field of dots that brighten and grow toward `--accent` as the
 * cursor passes near them — canvas-based so it stays cheap at
 * full-viewport size. Reads `--sq-border` (resting dot colour) and
 * `--accent` (glow colour) straight off the theme, so it re-tints
 * itself automatically when `theme` flips. Falls back to a single
 * static frame under prefers-reduced-motion.
 *
 * Usage: <DotGrid theme={theme} className='hero__bg' />
 */
export default function DotGrid({ theme = 'dark', spacing = 36, className = '' }) {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas.parentElement
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const styles = getComputedStyle(document.documentElement)
    const accent = styles.getPropertyValue('--accent').trim() || '#4ade80'
    const baseDot = styles.getPropertyValue('--sq-border').trim() || '#222'

    const BASE_R = 0.75
    const MAX_R = 2.2
    const INFLUENCE = 140
    const EASE = 0.18

    let dots = []
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let frame = null

    function build () {
      const rect = parent.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const cols = Math.ceil(w / spacing) + 1
      const rows = Math.ceil(h / spacing) + 1
      dots = []
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ x: c * spacing, y: r * spacing, r: BASE_R })
        }
      }
    }

    function paintStatic () {
      ctx.clearRect(0, 0, w, h)
      ctx.globalAlpha = 1
      ctx.fillStyle = baseDot
      for (const d of dots) {
        ctx.beginPath()
        ctx.arc(d.x, d.y, BASE_R, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function tick () {
      ctx.clearRect(0, 0, w, h)
      const { x: mx, y: my } = mouse.current
      for (const d of dots) {
        const dx = d.x - mx
        const dy = d.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        const t = Math.max(0, 1 - dist / INFLUENCE)
        const targetR = BASE_R + (MAX_R - BASE_R) * t
        d.r += (targetR - d.r) * EASE

        ctx.globalAlpha = t > 0.02 ? 0.35 + t * 0.65 : 1
        ctx.fillStyle = t > 0.02 ? accent : baseDot
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }
      frame = requestAnimationFrame(tick)
    }

    function onMove (e) {
      const rect = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    function onLeave () {
      mouse.current = { x: -9999, y: -9999 }
    }
    function onResize () {
      build()
      if (reduceMotion) paintStatic()
    }

    build()

    if (reduceMotion) {
      paintStatic()
    } else {
      tick()
      parent.addEventListener('mousemove', onMove)
      parent.addEventListener('mouseleave', onLeave)
    }
    window.addEventListener('resize', onResize)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      parent.removeEventListener('mousemove', onMove)
      parent.removeEventListener('mouseleave', onLeave)
    }
  }, [theme, spacing])

  return <canvas ref={canvasRef} className={className} aria-hidden='true' />
}