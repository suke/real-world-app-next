import { useAuth } from '@/contexts/AuthContext'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'

type SettingFormProps = {
  onSubmit: (values: SettingFormValues) => void
  disabled?: boolean
}

export type SettingFormValues = {
  image: string
  username: string
  bio: string
  email: string
  password: string
}

const schema = object().shape({
  image: string().url(),
  username: string().required(),
  bio: string(),
  email: string().required(),
  password: string(),
})

export const SettingForm: React.FC<SettingFormProps> = ({ onSubmit, disabled = false }) => {
  const { currentUser } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<SettingFormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      image: currentUser?.image ?? '',
      username: currentUser?.username ?? '',
      bio: currentUser?.bio ?? '',
      email: currentUser?.email ?? '',
      password: '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={disabled}>
        <fieldset className="form-group">
          <input className="form-control" type="text" placeholder="URL of profile picture" {...register('image')} />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Your Name"
            {...register('username')}
          />
        </fieldset>
        <fieldset className="form-group">
          <textarea
            className="form-control form-control-lg"
            rows={8}
            placeholder="Short bio about you"
            {...register('bio')}
          ></textarea>
        </fieldset>
        <fieldset className="form-group">
          <input className="form-control form-control-lg" type="text" placeholder="Email" {...register('email')} />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="Password"
            {...register('password')}
          />
        </fieldset>
        <button className="btn btn-lg btn-primary pull-xs-right" disabled={!isValid || disabled}>
          Update Settings
        </button>
      </fieldset>
    </form>
  )
}
