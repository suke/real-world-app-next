import { useMutation, useQueryClient } from '@tanstack/react-query'
import { favoriteArticle } from '@/services/favoriteService'
import { articleKeys } from '@/constants/keyFactories'
import { FetchFeedsResponse } from '@/types/api/response/FetchFeedsResponse'
import { SearchArticleResponse } from '@/types/api/response/SearchArticlesResponse'

export const useFavoriteArticle = () => {
  const queryClient = useQueryClient()
  return useMutation(favoriteArticle, {
    onSuccess: res => {
      queryClient.setQueryData(articleKeys.detail(res.slug), res)
      queryClient.setQueriesData<FetchFeedsResponse>(articleKeys.feeds(), prev => {
        if (!prev) {
          return prev
        }
        const newArticles = prev?.articles.map(article => (article.slug === res.slug ? res : article))
        return { ...prev, articles: newArticles }
      })
      queryClient.setQueriesData<SearchArticleResponse>(articleKeys.lists(), prev => {
        if (!prev) {
          return prev
        }
        const newArticles = prev?.articles.map(article => (article.slug === res.slug ? res : article))
        return { ...prev, articles: newArticles }
      })
    },
  })
}
