export const getAuthToken = () => {
  if (typeof window === 'undefined') {
    return null
  }

  return window.localStorage.getItem('authToken')
}
