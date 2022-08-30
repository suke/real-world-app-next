export const userKeys = {
  all: ['users'] as const,
  details: () => [...userKeys.all, 'details'] as const,
  detail: (username: string) => [...userKeys.details(), username] as const,
  currentUser: () => [...userKeys.all, 'currentUser'],
}
