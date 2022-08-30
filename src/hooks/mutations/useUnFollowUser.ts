import { useMutation, useQueryClient } from '@tanstack/react-query'
import { unFollowUser } from '@/services/followService'
import { profileKeys, userKeys } from '@/constants/keyFactories'

export const useUnFollowUser = () => {
  const queryClient = useQueryClient()
  return useMutation(unFollowUser, {
    onSuccess: data => {
      queryClient.setQueryData(profileKeys.detail(data.username), data)
      queryClient.invalidateQueries(userKeys.detail(data.username))
    },
  })
}
