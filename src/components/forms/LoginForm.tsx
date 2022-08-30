import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'

type LoginFormInput = {
  onSubmit: (values: LoginFormValues) => void
  disabled?: boolean
}

export type LoginFormValues = {
  email: string
  password: string
}

const schema = object()
  .shape({
    email: string().required().email(),
    password: string().required(),
  })
  .required()

export const LoginForm: React.FC<LoginFormInput> = ({ onSubmit, disabled }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginFormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="form-group" disabled={disabled}>
        <fieldset className="form-group">
          <input type="text" className="form-control form-control-lg" placeholder="Email" {...register('email')} />
        </fieldset>
        <input
          className="form-control form-control-lg"
          type="password"
          placeholder="Password"
          {...register('password')}
        />
      </fieldset>
      <button className="btn btn-lg btn-primary pull-xs-right" disabled={!isValid || disabled}>
        Sign in
      </button>
    </form>
  )
}
