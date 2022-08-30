import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateUser } from '@/services/userService'
import { userKeys, profileKeys } from '@/constants/keyFactories'

export const useUpdateUser = () => {
  const queryClient = useQueryClient()
  return useMutation(updateUser, {
    onSuccess: data => {
      queryClient.setQueryData(userKeys.currentUser(), data)
      queryClient.setQueryData(profileKeys.detail(data.username), {
        bio: data.bio,
        following: data.following,
        image: data.image,
        username: data.username,
      })
    },
  })
}
