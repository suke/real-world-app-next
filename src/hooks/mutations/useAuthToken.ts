import { useState, useEffect, useCallback } from 'react'

const authTokenKey = 'authToken'

export const useAuthToken = () => {
  const [authToken, setAuthTokenInternal] = useState<{ token: string | undefined | null; resolved: boolean }>({
    token: undefined,
    resolved: false,
  })

  useEffect(() => {
    const authToken = window.localStorage.getItem(authTokenKey)
    setAuthTokenInternal({ token: authToken, resolved: true })
  }, [])

  const setAuthToken = useCallback((authToken: string | undefined) => {
    if (!authToken) {
      return
    }

    window.localStorage.setItem(authTokenKey, authToken)
    setAuthTokenInternal({ token: authToken, resolved: true })
  }, [])

  const removeAuthToken: React.DispatchWithoutAction = useCallback(() => {
    window.localStorage.removeItem(authTokenKey)
    setAuthTokenInternal({ token: null, resolved: true })
  }, [])

  return [authToken, setAuthToken, removeAuthToken] as const
}
