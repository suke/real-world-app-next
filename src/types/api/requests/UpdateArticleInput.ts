import { Article } from '@/types/domain/Article'

export type UpdateArticleInput = {
  slug: string
  article: Partial<Article>
}
