import { Article } from '@/types/domain/Article'

export type FetchFeedsResponse = {
  articles: Article[]
  articleCount: number
}
