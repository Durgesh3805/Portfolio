"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

export default function Hero() {
  const innerRef = useRef(null)
  const visualRef = useRef(null)
  const imageWrapRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduce) return

    const inner = innerRef.current
    const visual = visualRef.current
    const imgWrap = imageWrapRef.current
    if (!inner || !visual || !imgWrap) return

    let rafId = null
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const ease = 0.12

    function onMove(e) {
      const rect = inner.getBoundingClientRect()
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      const x = (clientX - rect.left) / rect.width - 0.5 // -0.5..0.5
      const y = (clientY - rect.top) / rect.height - 0.5
      // smaller multipliers for subtlety
      targetX = x
      targetY = y
      if (!rafId) rafId = requestAnimationFrame(animate)
    }

    function animate() {
      currentX += (targetX - currentX) * ease
      currentY += (targetY - currentY) * ease

      // subtle rotations and translations
      const rotateY = currentX * 3 // degrees
      const rotateX = -currentY * 3
      const translateX = currentX * -6 // px
      const translateY = currentY * -6

      visual.style.transform = `translate(${translateX}px, ${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      imgWrap.style.transform = `translate(${translateX * 0.35}px, ${translateY * 0.35}px) rotate(${rotateY * 0.05}deg)`

      rafId = requestAnimationFrame(animate)
    }

    function onLeave() {
      targetX = 0
      targetY = 0
      if (!rafId) rafId = requestAnimationFrame(animate)
    }

    inner.addEventListener('mousemove', onMove)
    inner.addEventListener('mouseleave', onLeave)
    inner.addEventListener('touchmove', onMove, { passive: true })
    inner.addEventListener('touchend', onLeave)

    return () => {
      inner.removeEventListener('mousemove', onMove)
      inner.removeEventListener('mouseleave', onLeave)
      inner.removeEventListener('touchmove', onMove)
      inner.removeEventListener('touchend', onLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero__inner container" ref={innerRef}>
        <div className="hero__visual" ref={visualRef}>
          <div className="hero__image-wrap" ref={imageWrapRef}>
            <Image
              src="/imgs/HeroBackground.png"
              alt="Hero background"
              width={900}
              height={900}
              className="hero__image"
              priority
            />
          </div>
        </div>

        <div className="hero__text" aria-hidden>
          <h1>
            Durgesh
            <br />
            A P
          </h1>
        </div>
      </div>
    </section>
  )
}
