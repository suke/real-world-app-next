import * as React from 'react'
import { Article } from '@/types/domain/Article'
import { ArticleListItem } from './ArticleListItem'

type ArticleListProps = {
  articles: Article[]
  isLoading?: boolean
}

export const ArticleList: React.FC<ArticleListProps> = ({ articles, isLoading }) => {
  if (isLoading) {
    return <div className="article-preview">Loading Articles...</div>
  }

  if (articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>
  }

  return (
    <div>
      {articles.map(article => (
        <ArticleListItem key={article.slug} article={article} />
      ))}
    </div>
  )
}
