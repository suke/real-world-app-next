export const profileKeys = {
  all: ['profiles'] as const,
  details: () => [...profileKeys.all, 'details'] as const,
  detail: (username: string) => [...profileKeys.details(), username],
}
