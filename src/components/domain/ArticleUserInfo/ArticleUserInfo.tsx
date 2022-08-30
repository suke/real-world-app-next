import React from 'react'
import Link from 'next/link'
import styles from './ArticleUserInfo.module.css'

type ArticleUserInfoProps = {
  username: string
  createdAt: string
}

export const ArticleUserInfo: React.FC<ArticleUserInfoProps> = ({ username, createdAt }) => {
  return (
    <div className="info">
      <Link href={`profile/${username}`}>
        <a href="" className={`author ${styles.author}`}>
          {username}
        </a>
      </Link>
      <span className="date">January 20th</span>
    </div>
  )
}
