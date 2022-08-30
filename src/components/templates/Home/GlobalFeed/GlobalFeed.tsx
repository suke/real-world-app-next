import React from 'react'
import { ArticleList } from '@/components/domain/ArticleList'
import { useSearchArticle } from '@/hooks/queries/useSearchArticle'

export const GlobalFeed: React.FC = () => {
  const { data, isLoading } = useSearchArticle({ limit: 10, offset: 0 })

  return <ArticleList articles={data?.articles ?? []} isLoading={isLoading}></ArticleList>
}
