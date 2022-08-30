import { useCallback } from 'react'
import { useAuthHandler } from '@/contexts/AuthContext'
import { useQueryClient } from '@tanstack/react-query'

export const useLogout = () => {
  const { removeAuthToken } = useAuthHandler()!
  const queryClient = useQueryClient()
  const logout = useCallback(() => {
    removeAuthToken()
    queryClient.clear()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return logout
}
