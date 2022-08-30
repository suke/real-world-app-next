import { Article } from '@/types/domain/Article'

export type UpdateArticleResponse = {
  article: Pick<Article, 'title' | 'description' | 'body' | 'tagList'>
}
