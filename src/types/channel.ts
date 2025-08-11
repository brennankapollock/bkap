export interface Channel {
  id: string
  number: string
  name: string
  description: string
  color: string
}

export interface Transmission {
  channel: string
  title: string
  corruption: number
  timestamp: string
  content: string
  slug: string
}

export const CHANNELS: Channel[] = [
  {
    id: '00',
    number: 'CHANNEL 00',
    name: 'DEAD AIR',
    description: 'about, contact, void',
    color: '#666666'
  },
  {
    id: '01',
    number: 'CHANNEL 01',
    name: 'ENGINEERING',
    description: 'code, projects',
    color: '#00ff00'
  },
  {
    id: '02',
    number: 'CHANNEL 02',
    name: 'POETIC FREQUENCIES',
    description: 'written work',
    color: '#ffff00'
  },
  {
    id: '03',
    number: 'CHANNEL 03',
    name: 'VISUAL STATIC',
    description: 'photography, design',
    color: '#ff00ff'
  },
  {
    id: '04',
    number: 'CHANNEL 04',
    name: 'AUDIO WAVES',
    description: 'music, sound experiments',
    color: '#00ffff'
  },
  {
    id: '05',
    number: 'CHANNEL 05',
    name: 'SACRED DISRUPTIONS',
    description: 'theological work',
    color: '#ff0000'
  }
]