import React from 'react'
import Link from 'next/link'
import styles from './UserIcon.module.css'

type UserIconProps = {
  image: string
  username: string
  width?: number
  height?: number
}

export const UserIcon: React.FC<UserIconProps> = ({ image, username, width, height }) => {
  return <img className={styles.iconImg} src={image} alt={`${username} icon`} width={width} height={height} />
}

export const UserIconWithLink: React.FC<UserIconProps> = ({ image, username, width, height }) => {
  return (
    <Link href={`/profile/${username}`}>
      <a href="">
        <UserIcon username={username} image={image} width={width} height={height} />
      </a>
    </Link>
  )
}

export const MemoUserIcon = React.memo(UserIcon)
export const MemoUserIconWithLink = React.memo(UserIconWithLink)
