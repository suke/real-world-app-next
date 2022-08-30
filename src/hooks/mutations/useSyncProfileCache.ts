import { useQueryClient } from '@tanstack/react-query'
import { Profile } from '@/types/domain/Profile'
import { useCallback } from 'react'
import { Article } from '@/types/domain/Article'
import { articleKeys } from '@/constants/keyFactories'

export const useSyncArticleAuthor = () => {
  const queryClient = useQueryClient()

  const sync = useCallback((slug: string, profile: Profile) => {
    const currentCache = queryClient.getQueryState<Article>(articleKeys.detail(slug))
    if (!currentCache) {
      return
    }
    queryClient.setQueriesData(articleKeys.detail(slug), {
      ...currentCache.data,
      author: { ...currentCache.data?.author, following: profile.following },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return sync
}
