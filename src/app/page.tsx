'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CHANNELS } from '@/types/channel'

export default function Home() {
  const router = useRouter()
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedChannel, setSelectedChannel] = useState('01')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Check for saved channel preference
    const savedChannel = localStorage.getItem('bkap-channel')
    if (savedChannel) {
      setSelectedChannel(savedChannel)
    }

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '5') {
        const channelId = e.key.padStart(2, '0')
        setSelectedChannel(channelId)
        localStorage.setItem('bkap-channel', channelId)
        router.push(`/channel/${channelId}`)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [router])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  }

  return (
    <main className="min-h-screen p-8 flex flex-col">
      <header className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-static-green animate-flicker">
              BKAP - DIGITAL TRANSMISSION
            </h1>
            <p className="text-static-amber opacity-80">
              BRENNAN K.A. POLLOCK
            </p>
          </div>
          <div className="text-right text-sm opacity-60">
            <div>{formatDate(currentTime)}</div>
            <div className="font-bold">{formatTime(currentTime)}</div>
          </div>
        </div>
        
        <div className="border-t border-static-green opacity-30 mb-6"></div>
        
        <div className="text-xs opacity-70 mb-8">
          SIGNAL DETECTED... TUNING FREQUENCIES...
          <div className="animate-pulse">███████████████████ 100%</div>
        </div>
      </header>

      <div className="flex-1">
        <div className="mb-8">
          <h2 className="text-lg mb-4 text-static-amber">AVAILABLE CHANNELS:</h2>
          <div className="space-y-2">
            {CHANNELS.map((channel) => (
              <button
                key={channel.id}
                onClick={() => {
                  setSelectedChannel(channel.id)
                  localStorage.setItem('bkap-channel', channel.id)
                  router.push(`/channel/${channel.id}`)
                }}
                className={`block w-full text-left p-3 border transition-all duration-200 hover:bg-opacity-10 hover:bg-white ${
                  selectedChannel === channel.id 
                    ? 'border-static-green bg-static-green bg-opacity-5' 
                    : 'border-gray-700'
                }`}
                style={{ color: channel.color }}
              >
                <div className="flex justify-between">
                  <span className="font-bold">{channel.number}</span>
                  <span>Press {channel.id}</span>
                </div>
                <div className="text-sm opacity-80">
                  {channel.name} - {channel.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="text-xs opacity-40 space-y-1">
          <div>► USE ARROW KEYS OR NUMBER KEYS TO NAVIGATE</div>
          <div>► THIS IS NOT A WEBSITE - IT IS A BROADCAST</div>
          <div>► SIGNAL MAY DEGRADE WITHOUT WARNING</div>
        </div>
      </div>

      <footer className="mt-8 text-xs opacity-30 border-t border-static-green pt-4">
        <div>TRANSMISSION STATUS: ACTIVE</div>
        <div>LAST SYNC: {formatTime(currentTime)}</div>
        <div>CORRUPTION LEVEL: {Math.floor(Math.random() * 15)}%</div>
      </footer>
    </main>
  )
}