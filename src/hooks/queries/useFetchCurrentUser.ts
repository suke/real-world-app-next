import { useQuery } from '@tanstack/react-query'
import { fetchCurrentUser } from '@/services/userService'
import { userKeys } from '@/constants/keyFactories'

export const useFetchCurrentUser = (options: { enabled: boolean } = { enabled: true }) => {
  return useQuery(userKeys.currentUser(), () => fetchCurrentUser(), options)
}
