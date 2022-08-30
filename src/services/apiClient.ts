import axios, { AxiosRequestConfig } from 'axios'
import { getAuthToken } from '@/utils/getAuthToken'

const apiClient = axios.create({ baseURL: 'http://localhost:8081/api' })

const withAuthorizationHeader = (config: AxiosRequestConfig<any>) => {
  const authToken = getAuthToken()
  if (!authToken) {
    return config
  }

  config.headers = {
    ...config.headers,
    Authorization: `Token ${authToken}`,
  }

  return config
}

apiClient.interceptors.request.use(
  config => {
    return withAuthorizationHeader(config)
  },
  error => {
    return Promise.reject(error)
  }
)

export default apiClient
