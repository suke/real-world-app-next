import React from 'react'
import { ArticleUserInfo } from '@/components/domain/ArticleUserInfo'
import { MemoUserIconWithLink } from '@/components/domain/UserIcon'
import { ArticleActionButtons } from '../ArticleActionButtons'
import { Article } from '@/types/domain'
import styles from './ArticleMeta.module.css'

type ArticleMetaProps = {
  article: Article
}

export const ArticleMeta: React.FC<ArticleMetaProps> = ({ article }) => {
  return (
    <div className={`article-meta ${styles.articleMeta}`}>
      <MemoUserIconWithLink image={article.author.image} username={article.author.username} />
      <ArticleUserInfo username={article.author.username} createdAt={article.createdAt} />
      <ArticleActionButtons article={article} />
    </div>
  )
}
