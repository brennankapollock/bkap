'use client'

import { useEffect, useRef, useState } from 'react'

interface VideoBackgroundProps {
  src?: string
  className?: string
  opacity?: number
}

export default function VideoBackground({ 
  src = '/videos/background-loops/static.mp4',
  className = '',
  opacity = 0.1
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsLoaded(true)
      video.play().catch(console.error)
    }

    const handleError = () => {
      console.warn('Video failed to load, continuing without background video')
    }

    video.addEventListener('canplaythrough', handleCanPlay)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay)
      video.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        style={{ opacity: isLoaded ? opacity : 0 }}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
      
      {/* Fallback pattern for when video doesn't load */}
      {!isLoaded && (
        <div 
          className="w-full h-full bg-repeat opacity-5"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                #00ff00 0px,
                #00ff00 1px,
                transparent 1px,
                transparent 10px
              ),
              repeating-linear-gradient(
                -45deg,
                #00ff00 0px,
                #00ff00 1px,
                transparent 1px,
                transparent 10px
              )
            `,
            backgroundSize: '20px 20px'
          }}
        />
      )}
    </div>
  )
}