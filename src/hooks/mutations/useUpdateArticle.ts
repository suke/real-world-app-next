import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateArticle } from '@/services/articleService'
import { articleKeys } from '@/constants/keyFactories'

export const useUpdateArticle = () => {
  const queryClient = useQueryClient()
  return useMutation(updateArticle, {
    onSuccess: res => {
      queryClient.setQueriesData(articleKeys.detail(res.title), res)
    },
  })
}
