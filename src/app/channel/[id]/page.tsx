'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { CHANNELS, Channel } from '@/types/channel'

export default function ChannelPage() {
  const router = useRouter()
  const params = useParams()
  const channelId = params.id as string
  
  const [currentTime, setCurrentTime] = useState(new Date())
  const [channel, setChannel] = useState<Channel | null>(null)
  const [corruption, setCorruption] = useState(0)

  useEffect(() => {
    const foundChannel = CHANNELS.find(c => c.id === channelId)
    if (!foundChannel) {
      router.push('/')
      return
    }
    
    setChannel(foundChannel)
    localStorage.setItem('bkap-channel', channelId)
  }, [channelId, router])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      setCorruption(Math.floor(Math.random() * 20))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '5') {
        const newChannelId = e.key.padStart(2, '0')
        router.push(`/channel/${newChannelId}`)
      } else if (e.key === 'Escape' || e.key === 'Backspace') {
        router.push('/')
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [router])

  if (!channel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-static-green animate-pulse">
          TUNING... SEARCHING FOR SIGNAL...
        </div>
      </div>
    )
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  return (
    <main className="min-h-screen p-8">
      <header className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-xl font-bold animate-flicker" style={{ color: channel.color }}>
              {channel.number}
            </h1>
            <h2 className="text-lg text-static-green">
              {channel.name}
            </h2>
            <p className="text-sm opacity-70 text-static-amber">
              {channel.description}
            </p>
          </div>
          <div className="text-right text-sm opacity-60">
            <div>{formatTime(currentTime)}</div>
            <div className="text-xs">CORRUPTION: {corruption}%</div>
          </div>
        </div>
        
        <div className="border-t border-current opacity-30 mb-6" style={{ borderColor: channel.color }}></div>
      </header>

      <div className="flex-1 mb-8">
        <div className="text-center py-16">
          <div className="text-4xl mb-4 animate-pulse" style={{ color: channel.color }}>
            ██ NO SIGNAL ██
          </div>
          <div className="text-lg text-static-green opacity-70">
            TRANSMISSION OFFLINE
          </div>
          <div className="text-sm opacity-50 mt-4">
            This channel is currently being configured.
          </div>
          <div className="text-sm opacity-50 mt-2">
            Content will be transmitted once mobile sync is established.
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-xs opacity-40">
          <div>► ESC: RETURN TO CHANNEL SELECTOR</div>
          <div>► 0-5: DIRECT CHANNEL ACCESS</div>
          <div>► SIGNAL AUTO-REFRESHES EVERY 60s</div>
        </div>
      </div>

      <footer className="mt-8 text-xs opacity-30 border-t border-current pt-4" style={{ borderColor: channel.color }}>
        <div className="flex justify-between">
          <div>
            <div>STATUS: STANDBY</div>
            <div>SYNC: PENDING</div>
          </div>
          <div className="text-right">
            <div>FREQ: {channel.id}00.{Math.floor(Math.random() * 999)} MHz</div>
            <div>PWR: {Math.floor(Math.random() * 100)}W</div>
          </div>
        </div>
      </footer>
    </main>
  )
}