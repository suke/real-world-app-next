import { useQuery } from '@tanstack/react-query'
import { fetchArticle } from '@/services/articleService'
import { FetchArticleOptions } from '@/types/api/requests/FetchArticleOptions'
import { articleKeys } from '@/constants/keyFactories'

export const useFetchArticle = ({ slug }: FetchArticleOptions) => {
  return useQuery(articleKeys.detail(slug), () => fetchArticle({ slug }))
}
