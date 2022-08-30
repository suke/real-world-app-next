import { FetchFeedOptions } from '@/types/api/requests/FetchFeedOptions'
import { SearchArticleOptions } from '@/types/api/requests/SearchArticleOptions'

export const articleKeys = {
  all: ['articles'] as const,
  details: () => [...articleKeys.all, 'detail'] as const,
  detail: (slug: string) => [...articleKeys.all, slug] as const,
  lists: () => [...articleKeys.all, 'list'],
  list: (filters: SearchArticleOptions) => [...articleKeys.lists(), { filters }] as const,
  feeds: () => [...articleKeys.all, 'feed'] as const,
  feed: (filters: FetchFeedOptions) => [...articleKeys.feeds(), 'feed', { filters }] as const,
}
