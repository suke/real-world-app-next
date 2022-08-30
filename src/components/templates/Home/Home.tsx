/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { WaitForInitialSignedInStateChange } from '@/components/guards/WaitForInitialSignedInStateChange'
import { MemoBanner } from './Banner/Banner'
import { HomeContainer } from './HomeContainer'

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      <MemoBanner />
      <WaitForInitialSignedInStateChange>
        <HomeContainer />
      </WaitForInitialSignedInStateChange>
    </div>
  )
}
