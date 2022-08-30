import { useQuery } from '@tanstack/react-query'
import { searchArticle } from '@/services/articleService'
import { SearchArticleOptions } from '@/types/api/requests/SearchArticleOptions'
import { articleKeys } from '@/constants/keyFactories'

export const useSearchArticle = (options: SearchArticleOptions) => {
  return useQuery(articleKeys.list(options), () => searchArticle(options))
}
