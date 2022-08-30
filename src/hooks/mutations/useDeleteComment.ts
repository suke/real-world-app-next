import { useMutation } from '@tanstack/react-query'
import { deleteComment } from '@/services/commentService'

export const useDeleteComment = () => {
  return useMutation(deleteComment)
}
