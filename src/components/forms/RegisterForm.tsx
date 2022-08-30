import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'

type RegisterFormInput = {
  onSubmit: (values: RegisterFormValues) => void
  disabled?: boolean
}

export type RegisterFormValues = {
  username: string
  email: string
  password: string
}

const schema = object()
  .shape({
    username: string().required(),
    email: string().required().email(),
    password: string().required(),
  })
  .required()

export const RegisterForm: React.FC<RegisterFormInput> = ({ onSubmit, disabled = false }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<RegisterFormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  console.log('called')

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="form-group" disabled={disabled}>
          <fieldset className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Your Name"
              {...register('username')}
            />
          </fieldset>
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
          Sign Up
        </button>
      </form>
    </>
  )
}
