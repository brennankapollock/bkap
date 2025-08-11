'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface GlitchTextProps {
  text: string
  className?: string
  intensity?: number
  speed?: number
}

export default function GlitchText({ 
  text, 
  className = '', 
  intensity = 1, 
  speed = 1 
}: GlitchTextProps) {
  const [glitchedText, setGlitchedText] = useState(text)

  useEffect(() => {
    if (intensity === 0) {
      setGlitchedText(text)
      return
    }

    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`'
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newText = text
          .split('')
          .map((char) => {
            if (Math.random() < (intensity * 0.1)) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)]
            }
            return char
          })
          .join('')
        
        setGlitchedText(newText)
        
        setTimeout(() => {
          setGlitchedText(text)
        }, 50 / speed)
      }
    }, 2000 / speed)

    return () => clearInterval(glitchInterval)
  }, [text, intensity, speed])

  return (
    <motion.span
      className={`glitch-text ${className}`}
      data-text={text}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {glitchedText}
    </motion.span>
  )
}