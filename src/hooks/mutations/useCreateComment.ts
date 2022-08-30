import { useMutation } from '@tanstack/react-query'
import { createComment } from '@/services/commentService'

export const useCreateComment = () => {
  return useMutation(createComment)
}
