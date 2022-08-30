import axios from 'axios'

export const isUnAuthorizedError = (error: unknown) => {
  if (!axios.isAxiosError(error)) {
    return false
  }

  return error.response?.status === 401
}
