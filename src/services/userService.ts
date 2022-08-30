import apiClient from './apiClient'
import { FetchUserProfileOptions } from '@/types/api/requests/FetchUserProfileOptions'
import { UpdateUserInput } from '@/types/api/requests/UpdateUser'
import { FetchCurrentUserResponse } from '@/types/api/response/FetchCurrentUserResponse'
import { FetchUserProfileResponse } from '@/types/api/response/FetchUserProfileResponse'
import { UpdateUserResponse } from '@/types/api/response/UpdateUserResponse'

export const fetchCurrentUser = () => {
  return apiClient.get<FetchCurrentUserResponse>('/user').then(res => res.data.user)
}

export const fetchUserProfile = ({ username }: FetchUserProfileOptions) => {
  return apiClient.get<FetchUserProfileResponse>(`/profiles/${username}`).then(res => res.data.profile)
}

export const updateUser = (updateUserParams: UpdateUserInput) => {
  return apiClient.put<UpdateUserResponse>('/user', { user: updateUserParams }).then(res => res.data.user)
}
