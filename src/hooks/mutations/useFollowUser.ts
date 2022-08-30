import { useMutation, useQueryClient } from '@tanstack/react-query'
import { followUser } from '@/services/followService'
import { profileKeys, userKeys } from '@/constants/keyFactories'

export const useFollowUser = () => {
  const queryClient = useQueryClient()
  return useMutation(followUser, {
    onSuccess: data => {
      queryClient.setQueryData(profileKeys.detail(data.username), data)
      queryClient.invalidateQueries(userKeys.detail(data.username))
    },
  })
}
