import { useQuery } from '@tanstack/react-query'
import { fetchTags } from '@/services/tagService'
import { tagKeys } from '@/constants/keyFactories'

export const useFetchTags = () => {
  return useQuery(tagKeys.all, fetchTags)
}
