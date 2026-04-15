import { useEffect, useRef } from 'react'

const SPACING = 56
const DOT_RADIUS = 2.1
/** Dots only render within this distance from the cursor; elsewhere the canvas stays clear. */
const REVEAL_RADIUS = 380
const PEAK_ALPHA = 0.58

export function DotGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef(0)
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const syncSize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      sizeRef.current = { w, h, dpr }
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      rafRef.current = 0
      const { w, h } = sizeRef.current
      if (!w || !h) return

      ctx.clearRect(0, 0, w, h)
      const { x: mx, y: my } = mouseRef.current

      for (let x = SPACING / 2; x < w; x += SPACING) {
        for (let y = SPACING / 2; y < h; y += SPACING) {
          const dist = Math.hypot(x - mx, y - my)
          if (dist >= REVEAL_RADIUS) continue
          const t = 1 - dist / REVEAL_RADIUS
          const alpha = PEAK_ALPHA * t * t
          ctx.beginPath()
          ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(130, 220, 215, ${alpha})`
          ctx.fill()
        }
      }
    }

    const scheduleDraw = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(draw)
      }
    }

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      scheduleDraw()
    }

    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) {
        mouseRef.current = { x: t.clientX, y: t.clientY }
        scheduleDraw()
      }
    }

    const onResize = () => {
      syncSize()
      scheduleDraw()
    }

    syncSize()
    draw()

    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full"
      aria-hidden
    />
  )
}
