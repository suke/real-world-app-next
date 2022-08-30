import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const useCheckSignedIn = () => {
  const { signedInState } = useAuth()
  const router = useRouter()

  const checkSignedIn = useCallback(
    ({ redirectTo }: { redirectTo: string }) => {
      if (signedInState === 'notSignedIn') {
        router.push(redirectTo)
      }

      return Promise.resolve()
    },
    [signedInState, router]
  )

  return checkSignedIn
}
