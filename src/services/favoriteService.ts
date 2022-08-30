import apiClient from './apiClient'
import { FavoriteArticleInput } from '@/types/api/requests/FavoriteArticleInput'
import { UnfavoriteArticleInput } from '@/types/api/requests/UnfavoriteArticleInput'
import { FavoriteArticleResponse } from '@/types/api/response/FavoriteArticleResponse'
import { UnfavoriteArticleResponse } from '@/types/api/response/UnfavoriteArticleResponse'

export const favoriteArticle = ({ slug }: FavoriteArticleInput) => {
  return apiClient.post<FavoriteArticleResponse>(`/articles/${slug}/favorite`).then(res => res.data.article)
}

export const unfavoriteArticle = ({ slug }: UnfavoriteArticleInput) => {
  return apiClient.delete<UnfavoriteArticleResponse>(`/articles/${slug}/favorite`).then(res => res.data.article)
}
