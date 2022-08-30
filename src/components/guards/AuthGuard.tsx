import { useAuth } from '@/contexts/AuthContext'
import { SignedInState } from '@/types/domain/CurrentUser'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const AuthGuard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)
  const { signedInState } = useAuth()
  const router = useRouter()
  console.log(signedInState)

  useEffect(() => {
    switch (signedInState) {
      case 'pending':
        setAuthenticated(false)
        break
      case 'notSignedIn':
        setAuthenticated(false)
        router.push('/')
        break
      case 'signedIn':
        setAuthenticated(true)
        break
    }
  }, [signedInState, router])

  if (!authenticated) {
    return <></>
  }

  return <>{children}</>
}
