import { useMutation } from '@tanstack/react-query'
import { createArticle } from '@/services/articleService'

export const useCreateArticle = () => {
  return useMutation(createArticle)
}
