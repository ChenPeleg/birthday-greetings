import { CSSProperties } from 'react'

export type GreetingCardStyle = Omit<CSSProperties, 'textShadow'> & {
  headingColor?: string
  messageColor?: string
  textShadow?: boolean
  headingFontSize?: string
  messageFontSize?: string
}

interface GreetingCardProps {
  icon: string
  heading: string
  message: string
  cardStyle?: GreetingCardStyle
  containerClassName?: string
}

const GreetingCard = ({
  icon,
  heading,
  message,
  cardStyle = {},
  containerClassName = '',
}: GreetingCardProps) => {
  const { headingColor, messageColor, textShadow, headingFontSize, messageFontSize, ...restCardStyle } = cardStyle

  const headingStyle: CSSProperties = {
    fontSize: headingFontSize || 'clamp(2rem, 6vw, 3.5rem)',
    fontFamily: 'Georgia, serif',
    margin: '0 0 16px',
    lineHeight: 1.2,
    color: headingColor || '#333',
  }

  const messageStyle: CSSProperties = {
    fontSize: messageFontSize || 'clamp(1rem, 2.5vw, 1.3rem)',
    margin: 0,
    lineHeight: 1.7,
    color: messageColor || '#444',
  }

  if (textShadow) {
    headingStyle.textShadow = '2px 2px 12px rgba(0,0,0,0.5)'
    messageStyle.textShadow = '1px 1px 6px rgba(0,0,0,0.5)'
  }

  return (
    <div
      className={containerClassName}
      style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '40px 48px',
        borderRadius: '24px',
        backdropFilter: 'blur(10px)',
        maxWidth: '580px',
        margin: '20px',
        ...restCardStyle,
      }}
    >
      <div style={{ fontSize: '3rem', marginBottom: '8px' }}>{icon}</div>
      <h1 className={containerClassName ? `${containerClassName.split(' ')[0]}-title` : ''} style={headingStyle}>
        {heading}
      </h1>
      <p style={messageStyle}>{message}</p>
    </div>
  )
}

export default GreetingCard
