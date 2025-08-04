'use client'

import { animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

type CounterProps = {
   from: number
   to: number
   isInView: boolean
}

export function Counter({ from, to, isInView }: CounterProps) {
   const nodeRef = useRef<HTMLParagraphElement>(null)
   const originalValue = to

   useEffect(() => {
      if (!isInView || !nodeRef.current) return

      const node = nodeRef.current

      const controls = animate(from, to, {
         duration: 2.5,
         onUpdate(value) {
            node.textContent = Math.floor(value).toString()
         },
         onComplete() {
            node.textContent = originalValue.toString()
         },
      })

      return () => controls.stop()
   }, [isInView, from, to, originalValue])

   return <p ref={nodeRef} />
}
