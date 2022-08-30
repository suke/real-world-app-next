import apiClient from './apiClient'
import { FollowUserInput } from '@/types/api/requests/FollowUserInput'
import { FollowUserResponse } from '@/types/api/response/FollowUserResponse'
import { UnfollowUserInput } from '@/types/api/requests/UnfollowUserInput'
import { UnfollowUserResponse } from '@/types/api/response/UnfollowUserResponse'

export const followUser = ({ username }: FollowUserInput) => {
  return apiClient.post<FollowUserResponse>(`/profiles/${username}/follow`).then(res => res.data.profile)
}

export const unFollowUser = ({ username }: UnfollowUserInput) => {
  return apiClient.delete<UnfollowUserResponse>(`/profiles/${username}/follow`).then(res => res.data.profile)
}
