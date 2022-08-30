import React, { useState, useCallback } from 'react'
import { LoginForm, LoginFormValues } from '@/components/forms/LoginForm'
import { MemoErrorMessages } from '@/components/ui/ErrorMessages'
import { useLogin } from '@/hooks/mutations/useLogin'
import { toApiError } from '@/utils/errors/toApiError'
import { ApiError } from '@/types/api/ApiError'

export const Login: React.FC = () => {
  const [error, setError] = useState<ApiError>({})
  const mutation = useLogin()
  const onSubmit = useCallback((value: LoginFormValues) => {
    mutation.mutate(value, {
      onError: error => {
        setError(toApiError(error))
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <MemoErrorMessages errors={error} />
            <LoginForm onSubmit={onSubmit} disabled={mutation.isLoading} />
          </div>
        </div>
      </div>
    </div>
  )
}
