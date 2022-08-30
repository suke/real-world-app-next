import { useQuery } from '@tanstack/react-query'
import { FetchUserProfileOptions } from '@/types/api/requests/FetchUserProfileOptions'
import { fetchUserProfile } from '@/services/userService'
import { profileKeys } from '@/constants/keyFactories'

export const useFetchUserProfile = ({ username }: FetchUserProfileOptions) => {
  return useQuery(profileKeys.detail(username), () => fetchUserProfile({ username }))
}
