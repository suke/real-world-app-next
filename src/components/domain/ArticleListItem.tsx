import React from 'react'
import { Article } from '@/types/domain/Article'
import Link from 'next/link'
import { MemoUserIconWithLink } from './UserIcon'
import { ArticleUserInfo } from './ArticleUserInfo'
import { FavoriteArticleButton } from './FavoriteArticleButton'

type ArticleProps = {
  article: Article
}

export const ArticleListItem: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <MemoUserIconWithLink username={article.author.username} image={article.author.image} />
        <ArticleUserInfo username={article.author.username} createdAt={article.createdAt} />
        <div className="pull-xs-right">
          <FavoriteArticleButton article={article} omitText={true} />
        </div>
      </div>
      <Link href={`/article/${article.slug}`}>
        <a className="preview-link">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <span>Read more...</span>
        </a>
      </Link>
    </div>
  )
}
