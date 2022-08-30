import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { register } from '@/services/authService'
import { useAuthHandler } from '@/contexts/AuthContext'
import { userKeys } from '@/constants/keyFactories'

export const useRegister = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const { setAuthToken } = useAuthHandler()!
  return useMutation(register, {
    onSuccess: data => {
      queryClient.setQueryData(userKeys.currentUser(), data)
      setAuthToken(data.token)
      router.push('/')
    },
  })
}
