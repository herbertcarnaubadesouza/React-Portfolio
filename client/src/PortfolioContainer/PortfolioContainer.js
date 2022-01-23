import React from 'react'
import { TOTAL_SCREENS } from '../utilities/commonUtils'
import { FadeInSection } from './FadeInSection/FadeInSection'

export default function PortfolioContainer() {  

  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) => {
      const Component = screen.component ? (        
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div id={screen.screen_name} key={screen.screen_name}></div>
      )

      return screen.shouldFade ? (
        <FadeInSection>{Component}</FadeInSection>
      ) : (
        Component
      )
    })
  }

  return <>{mapAllScreens()}</>
}
