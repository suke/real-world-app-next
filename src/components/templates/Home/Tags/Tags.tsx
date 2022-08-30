import React from 'react'
import { ClickableTag } from '@/components/ui/ClickableTag'
import { useFetchTags } from '@/hooks/queries/useFetchTag'

export const Tags: React.FC = () => {
  const { data, isLoading } = useFetchTags()

  return (
    <div>
      <p>Popular Tags</p>
      <div className="tag-list">
        {isLoading && <div>Loading Tags...</div>}
        {!isLoading && data?.tags.map(tag => <ClickableTag key={tag} name={tag} />)}
      </div>
    </div>
  )
}
