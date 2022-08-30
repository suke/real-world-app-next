import { useQuery } from '@tanstack/react-query'
import { fetchFeeds } from '@/services/articleService'
import { FetchFeedOptions } from '@/types/api/requests/FetchFeedOptions'
import { articleKeys } from '@/constants/keyFactories'

export const useFetchFeeds = (options: FetchFeedOptions) => {
  return useQuery(articleKeys.feed(options), () => fetchFeeds(options))
}
