import GreetingCard from '../components/GreetingCard'
import GreetingPageLayout from '../components/GreetingPageLayout'
import { greetingsConfig } from '../config/greetings'

const Greeting4 = () => {
  const config = greetingsConfig[3]

  return (
    <GreetingPageLayout BackgroundComponent={config.BackgroundComponent} backgroundGradient={config.backgroundGradient}>
      <GreetingCard
        icon={config.icon}
        heading={config.heading}
        message={config.message}
        cardStyle={config.cardStyle}
        containerClassName={config.containerClassName}
      />
    </GreetingPageLayout>
  )
}

export default Greeting4
