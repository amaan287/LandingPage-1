"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

interface CounterAnimationProps {
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
}

export default function CounterAnimation({
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
}: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<number>(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      const startTime = Date.now() + delay
      const timer = setInterval(() => {
        const now = Date.now()
        if (now < startTime) return

        const progress = Math.min((now - startTime) / duration, 1)
        const nextCount = Math.floor(progress * end)

        if (nextCount !== countRef.current) {
          countRef.current = nextCount
          setCount(nextCount)
        }

        if (progress === 1) {
          clearInterval(timer)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, end, duration, delay])

  return (
    <div ref={ref} className="inline-block">
      {prefix}
      {count}
      {suffix}
    </div>
  )
}
