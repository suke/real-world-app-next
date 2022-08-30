import { ArticleList } from '@/components/domain/ArticleList'
import { useFetchFeeds } from '@/hooks/queries/useFetchFeeds'
import React from 'react'

// TODO:  implement pagination
export const MyFeed: React.FC = () => {
  const { data, isLoading } = useFetchFeeds({ limit: 10, offset: 0 })

  return <ArticleList articles={data?.articles ?? []} isLoading={isLoading}></ArticleList>
}
