export {}

declare global {
  type RequiredProperty<T, Key extends keyof T> = T & {
    [P in Key]-?: T[P]
  }
}
