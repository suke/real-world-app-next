import apiClient from './apiClient'
import { FetchTagsResponse } from '@/types/api/response/FetchTagsResponse'

export const fetchTags = () => {
  return apiClient.get<FetchTagsResponse>('/tags').then(res => res.data)
}
