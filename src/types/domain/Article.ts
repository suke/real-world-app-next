import { User } from './User'

export type Article = {
  author: Omit<User, 'token'>
  title: string
  description: string
  body: string
  tagList: string[]
  slug: string
  favoritesCount: number
  favorited: boolean
  createdAt: string
  updatedAt: string
}
