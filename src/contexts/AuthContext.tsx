import { useAuthToken } from '@/hooks/mutations/useAuthToken'
import React, { createContext, useState, useContext, useMemo } from 'react'
import { useFetchCurrentUser } from '@/hooks/queries/useFetchCurrentUser'
import { CurrentUser, SignedInState } from '@/types/domain/CurrentUser'
import { isUnAuthorizedError } from '@/utils/errors/isUnAuthorizedError'

const detectSignedInState = (
  authToken: string | undefined | null,
  currentUser: CurrentUser | undefined,
  isLoading: boolean,
  authTokenResolved: boolean
): SignedInState => {
  if (authTokenResolved && !authToken) {
    return 'notSignedIn'
  }

  if (currentUser) {
    return 'signedIn'
  }

  if (!currentUser && isLoading) {
    return 'pending'
  }

  return 'pending'
}

type AuthContextValue = {
  currentUser: CurrentUser | undefined | null
  signedInState: SignedInState
  authToken: string | undefined | null
  isLoading: boolean
  isError: boolean
  isFetched: boolean
}

type AuthHandlerContextValue = {
  setAuthToken: (token: string) => void
  removeAuthToken: () => void
}

const AuthContext = createContext<AuthContextValue>({
  currentUser: undefined,
  signedInState: 'pending',
  authToken: undefined,
  isLoading: false,
  isError: false,
  isFetched: false,
})

const AuthHandlerContext = createContext<AuthHandlerContextValue | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactElement }) => {
  const [{ token: authToken, resolved: authTokenResolved }, setAuthToken, removeAuthToken] = useAuthToken()
  const [user, setUser] = useState<CurrentUser | undefined>(undefined)
  const { data, isLoading, isError, isFetched, error } = useFetchCurrentUser({
    enabled: !!authToken && !user,
  })

  if (user !== data) {
    setUser(data)
  }

  if (error && isUnAuthorizedError(error) && authToken) {
    removeAuthToken()
  }

  const authContextValue: AuthContextValue = useMemo(() => {
    const loading = !!authToken && isLoading
    const fetched = !!authToken && isFetched
    return {
      currentUser: user,
      authToken,
      isLoading: loading,
      isError,
      isFetched: fetched,
      signedInState: detectSignedInState(authToken, user, isLoading, authTokenResolved),
    }
  }, [user, authToken, isLoading, isError, isFetched, authTokenResolved])

  const authHandlerContextValue: AuthHandlerContextValue = useMemo(
    () => ({
      setAuthToken,
      removeAuthToken,
    }),
    [setAuthToken, removeAuthToken]
  )

  return (
    <AuthContext.Provider value={authContextValue}>
      <AuthHandlerContext.Provider value={authHandlerContextValue}>{children}</AuthHandlerContext.Provider>
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
export const useAuthHandler = () => useContext(AuthHandlerContext)
