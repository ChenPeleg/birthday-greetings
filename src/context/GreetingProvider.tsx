import { PropsWithChildren, useState } from 'react'
import { Greeting, GreetingContext } from './GreetingContext'

const defaultGreeting: Greeting = {
  recipientName: 'John Doe',
  senderName: '',
  message: 'Wishing you an amazing birthday!',
  date: new Date().toLocaleDateString(),
}

export const GreetingProvider = ({ children }: PropsWithChildren) => {
  const [greetingData] = useState<Greeting>(defaultGreeting)

  return <GreetingContext.Provider value={greetingData}>{children}</GreetingContext.Provider>
}
