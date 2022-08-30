import React, { useState, useCallback } from 'react'
import Link from 'next/link'
import { RegisterForm, RegisterFormValues } from '@/components/forms/RegisterForm'
import { MemoErrorMessages } from '@/components/ui/ErrorMessages'
import { useRegister } from '@/hooks/mutations/useRegister'
import { toApiError } from '@/utils/errors/toApiError'
import { ApiError } from '@/types/api/ApiError'

export const Register: React.FC = () => {
  const [error, setError] = useState<ApiError>({})
  const mutation = useRegister()
  const onSubmit = useCallback((value: RegisterFormValues) => {
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
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link href="/login">
                <a>Have an account?</a>
              </Link>
            </p>
            <MemoErrorMessages errors={error} />
            <RegisterForm onSubmit={onSubmit} disabled={mutation.isLoading} />
          </div>
        </div>
      </div>
    </div>
  )
}
