import { Article } from '@/types/domain/Article'

export const isEmptyArticle = (article: Article | undefined) => {
  if (!article) {
    return true
  }

  const dupArticle: Partial<Article> = { ...article }
  const author = article.author ?? {}
  delete dupArticle['author']
  return Object.keys(dupArticle).length === 0 && Object.keys(author).length === 0
}
