import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login } from '@/services/authService'
import { useAuthHandler } from '@/contexts/AuthContext'
import { userKeys } from '@/constants/keyFactories'

export const useLogin = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const { setAuthToken } = useAuthHandler()!
  return useMutation(login, {
    onSuccess: data => {
      queryClient.setQueryData(userKeys.currentUser(), data)
      setAuthToken(data.token)
      router.push('/')
    },
  })
}
