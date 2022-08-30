import apiClient from './apiClient'
import { CreateArticleInput } from '@/types/api/requests/CreateArticleInput'
import { FetchArticleOptions } from '@/types/api/requests/FetchArticleOptions'
import { FetchFeedOptions } from '@/types/api/requests/FetchFeedOptions'
import { SearchArticleOptions } from '@/types/api/requests/SearchArticleOptions'
import { UpdateArticleInput } from '@/types/api/requests/UpdateArticleInput'
import { CreateArticleResponse } from '@/types/api/response/CreateArticleResponse'
import { FetchArticleResponse } from '@/types/api/response/FetchArticleResponse'
import { FetchFeedsResponse } from '@/types/api/response/FetchFeedsResponse'
import { SearchArticleResponse } from '@/types/api/response/SearchArticlesResponse'
import { UpdateArticleResponse } from '@/types/api/response/UpdateArticleResponse'
import { DeleteArticleResponse } from '@/types/api/response/DeleteArticleResponse'
import { DeleteArticleInput } from '@/types/api/requests/DeleteArticleInput'

export const createArticle = (createArticleParams: CreateArticleInput) => {
  return apiClient
    .post<CreateArticleResponse>('/articles', { article: createArticleParams })
    .then(res => res.data.article)
}

export const updateArticle = (params: UpdateArticleInput) => {
  return apiClient
    .put<UpdateArticleResponse>(`/articles/${params.slug}`, { article: params.article })
    .then(res => res.data.article)
}

export const fetchArticle = ({ slug }: FetchArticleOptions) => {
  return apiClient.get<FetchArticleResponse>(`/articles/${slug}`).then(res => res.data.article)
}

export const deleteArticle = ({ slug }: DeleteArticleInput) => {
  return apiClient.delete<DeleteArticleResponse>(`articles/${slug}`).then(res => res.data)
}

export const searchArticle = (options: SearchArticleOptions) => {
  return apiClient.get<SearchArticleResponse>('/articles', { params: options }).then(res => res.data)
}

export const fetchFeeds = (options: FetchFeedOptions) => {
  return apiClient.get<FetchFeedsResponse>('articles/feed', { params: options }).then(res => res.data)
}
