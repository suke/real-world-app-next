import { articleKeys } from './articleKeys'

export const commentKeys = {
  all: ['comments'] as const,
  articleComments: (slug: string) => [...commentKeys.all, slug],
}
