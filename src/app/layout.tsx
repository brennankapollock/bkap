import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'BKAP - DIGITAL TRANSMISSION',
  description: 'Brennan K.A. Pollock - Digital transmission in progress...',
  robots: 'noindex,nofollow',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="crt-screen min-h-screen font-mono">
        {children}
      </body>
    </html>
  )
}