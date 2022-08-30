import { useAuth } from '@/contexts/AuthContext'
import React from 'react'

export const WaitForInitialSignedInStateChange: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { signedInState } = useAuth()
  if (signedInState === 'pending') {
    return <></>
  }

  return <>{children}</>
}
