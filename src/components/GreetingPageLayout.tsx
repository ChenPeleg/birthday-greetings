import { CSSProperties, ComponentType, ReactNode } from 'react'

interface GreetingPageLayoutProps {
  BackgroundComponent?: ComponentType
  backgroundGradient?: string | null
  containerStyle?: CSSProperties
  children: ReactNode
}

const GreetingPageLayout = ({
  BackgroundComponent,
  backgroundGradient = null,
  containerStyle = {},
  children,
}: GreetingPageLayoutProps) => {
  const finalContainerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...containerStyle,
  }

  if (backgroundGradient) {
    finalContainerStyle.background = backgroundGradient
  }

  return (
    <div style={finalContainerStyle}>
      {BackgroundComponent && <BackgroundComponent />}
      {children}
    </div>
  )
}

export default GreetingPageLayout
