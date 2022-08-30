import { Article } from '@/types/domain/Article'

export type SearchArticleResponse = {
  articles: Article[]
  articleCount: number
}
