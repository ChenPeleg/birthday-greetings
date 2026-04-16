import { createContext } from 'react'

export interface Greeting {
  recipientName: string
  senderName: string
  message: string
  date: string
}

export const GreetingContext = createContext<Greeting | null>(null)
