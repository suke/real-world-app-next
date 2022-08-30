import axios, { AxiosError } from 'axios'
import { ApiError } from '@/types/api/ApiError'

const isErrorResponse = (error: any): error is AxiosError<{ errors?: ApiError; message?: string; status?: string }> => {
  if (!axios.isAxiosError(error)) {
    return false
  }

  if (!error.response) {
    return false
  }

  if (typeof error.response?.data !== 'object') {
    return false
  }

  return Object.hasOwn(error.response?.data ?? {}, 'errors')
}

export const toApiError = (error: unknown): ApiError => {
  if (!error) {
    return {}
  }

  if (!isErrorResponse(error)) {
    return {}
  }

  if (error.response?.data?.errors) {
    return error.response?.data?.errors
  }

  if (error.response?.data.message && error.response.data.status) {
    return { [error.response.data.status]: [error.response.data.message] }
  }

  return {}
}
