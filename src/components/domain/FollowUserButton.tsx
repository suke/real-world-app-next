import React from 'react'
import { useFollowUser } from '@/hooks/mutations/useFollowUser'
import { useUnFollowUser } from '@/hooks/mutations/useUnFollowUser'
import { User, Profile } from '@/types/domain'
import { useCheckSignedIn } from '@/hooks/useCheckSignedIn'

type FollowUserButtonProps = {
  target: Omit<User, 'token'> | Profile
  onFollow?: (profile: Profile) => void
  onUnfollow?: (profile: Profile) => void
}

const InnerFollowUserButton: React.FC<Omit<FollowUserButtonProps, 'onUnfollow'>> = ({ target, onFollow }) => {
  const mutation = useFollowUser()
  const checkSignedIn = useCheckSignedIn()
  const handleClick = () => {
    checkSignedIn({ redirectTo: '/register' }).then(() => {
      if (mutation.isLoading) {
        return
      }
      mutation.mutate(
        {
          username: target.username,
        },
        {
          onSuccess: data => {
            if (onFollow) {
              onFollow(data)
            }
          },
        }
      )
    })
  }

  return (
    <button
      className={`btn btn-sm action-btn ${target.following ? 'btn-secondary' : 'btn-outline-secondary'}`}
      onClick={handleClick}
    >
      <i className="ion-plus-round"></i>
      &nbsp; Follow {target.username}
    </button>
  )
}

const InnerUserUnfollowButton: React.FC<Omit<FollowUserButtonProps, 'onFollow'>> = ({ target, onUnfollow }) => {
  const mutation = useUnFollowUser()

  const handleClick = () => {
    mutation.mutate(
      {
        username: target.username,
      },
      {
        onSuccess: data => {
          if (onUnfollow) {
            onUnfollow(data)
          }
        },
      }
    )
  }

  return (
    <button
      className={`btn btn-sm action-btn ${target.following ? 'btn-secondary' : 'btn-outline-secondary'}`}
      onClick={handleClick}
    >
      <i className="ion-plus-round"></i>
      &nbsp; Unfollow {target.username}
    </button>
  )
}

export const FollowUserButton: React.FC<FollowUserButtonProps> = ({ target, onFollow, onUnfollow }) => {
  return target.following ? (
    <InnerUserUnfollowButton target={target} onUnfollow={onUnfollow} />
  ) : (
    <InnerFollowUserButton target={target} onFollow={onFollow} />
  )
}
