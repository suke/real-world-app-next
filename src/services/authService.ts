import apiClient from './apiClient'
import { LoginInput } from '@/types/api/requests/LoginInput'
import { RegisterInput } from '@/types/api/requests/RegisterInput'
import { LoginResponse } from '@/types/api/response/LoginResponse'
import { RegisterResponse } from '@/types/api/response/RegisterResponse'

export const login = (loginParams: LoginInput) => {
  return apiClient.post<LoginResponse>('/users/login', { user: loginParams }).then(res => res.data.user)
}

export const register = (registerParams: RegisterInput) => {
  return apiClient.post<RegisterResponse>('/users', { user: registerParams }).then(res => res.data.user)
}
