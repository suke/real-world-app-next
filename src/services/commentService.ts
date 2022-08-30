import { CreateCommentInput } from '@/types/api/requests/CreateCommentInput'
import { DeleteCommentInput } from '@/types/api/requests/DeleteCommentInput'
import { FetchCommentsInput } from '@/types/api/requests/FetchCommentsInput'
import { CreateCommentsResponse } from '@/types/api/response/CreateCommentResponse'
import { DeleteCommentsResponse } from '@/types/api/response/DeleteCommentResponse'
import { FetchCommentsResponse } from '@/types/api/response/FetchCommentsResponse'
import apiClient from './apiClient'

export const fetchCommentsFromArticle = ({ slug }: FetchCommentsInput) => {
  return apiClient.get<FetchCommentsResponse>(`/articles/${slug}/comments`).then(res => res.data.comments)
}

export const createComment = ({ slug, body }: CreateCommentInput) => {
  return apiClient
    .post<CreateCommentsResponse>(`/articles/${slug}/comments`, { comment: { body } })
    .then(res => res.data.comment)
}

export const deleteComment = ({ slug, commentId }: DeleteCommentInput) => {
  return apiClient.delete<DeleteCommentsResponse>(`/articles/${slug}/comments/${commentId}`).then(res => res.data)
}
