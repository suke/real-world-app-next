/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Article } from '@/types/domain'
import { ArticleMeta } from '../ArticleMeta'

type ArticleBannerProps = {
  article: Article
}

export const ArticleBanner: React.FC<ArticleBannerProps> = ({ article }) => {
  return (
    <div className="banner">
      <div className="container">
        <h1>{article.title}</h1>
        <ArticleMeta article={article} />
      </div>
    </div>
  )
}
