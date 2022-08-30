export type User = {
  username: string
  image: string
  token: string
  email: string
  bio: string | null
  following: boolean
  followedBy: User[]
}
