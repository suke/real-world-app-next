import * as React from 'react'

type TagProps = {
  name: string
  withOutline?: boolean
}

export const Tag: React.FC<TagProps> = ({ name, withOutline }) => {
  return <li className={`tag-pill tag-default ${withOutline ? 'tag-outline' : ''}`}>{name}</li>
}

export const MemoTag = React.memo(Tag)
