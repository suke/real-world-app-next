import * as React from 'react'

type ClickableTagProps = {
  name: string
  withOutline?: boolean
  onClick?: (tag: string) => void
}

export const ClickableTag: React.FC<ClickableTagProps> = ({ name, onClick, withOutline }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(name)
    }
  }

  return (
    <a className={`tag-pill tag-default ${withOutline ? 'tag-outline' : ''}`} onClick={handleClick}>
      {name}
    </a>
  )
}
