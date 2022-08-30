import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import { SettingForm, SettingFormValues } from '@/components/forms/SettingForm'
import { useUpdateUser } from '@/hooks/mutations/useUpdateUser'
import { useLogout } from '@/hooks/mutations/useLogout'

export const Settings: React.FC = () => {
  const router = useRouter()
  const mutation = useUpdateUser()
  const logout = useLogout()
  const onSubmit = useCallback((values: SettingFormValues) => {
    mutation.mutate(values, {
      onSuccess: res => {
        router.push(`/profile/${res.username}`)
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogoutClick = () => {
    logout()
    router.push('/')
  }

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <SettingForm onSubmit={onSubmit} disabled={mutation.isLoading} />
            <hr />
            <button className="btn btn-outline-danger" onClick={handleLogoutClick}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
