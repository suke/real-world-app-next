import { User } from './User'

export type CurrentUser = Omit<User, 'following' | 'followedBy'>

export type SignedInState = 'pending' | 'signedIn' | 'notSignedIn'
