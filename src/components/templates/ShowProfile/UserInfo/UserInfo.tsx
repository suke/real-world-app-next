import Link from 'next/link'
import { FollowUserButton } from '@/components/domain/FollowUserButton'
import { CurrentUser, Profile } from '@/types/domain'

type UserInfoProps = {
  currentUser: CurrentUser | undefined | null
  targetUserProfile: Profile
}

export const UserInfo: React.FC<UserInfoProps> = ({ currentUser, targetUserProfile }) => {
  return (
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            {targetUserProfile?.image && (
              <img src={targetUserProfile?.image} className="user-img" alt={`${targetUserProfile?.username} icon`} />
            )}
            <h4>{targetUserProfile?.username}</h4>
            <p>{targetUserProfile?.bio}</p>
            {currentUser?.username !== targetUserProfile?.username && (
              <div className="action-btn">
                <FollowUserButton target={targetUserProfile} />
              </div>
            )}
            {currentUser?.username === targetUserProfile?.username && (
              <Link href="/settings">
                <a className="btn btn-sm btn-outline-secondary action-btn">
                  <i className="ion-gear-a"></i>
                  &nbsp; Edit Profile Settings
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
