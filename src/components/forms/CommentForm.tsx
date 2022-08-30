import * as React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { UserIcon } from '@/components/domain/UserIcon'

type CommentFormProps = {
  authorName: string
  authorImage: string
  disabled?: boolean
  onSubmit: (values: CommentFormValues) => void
}

export type CommentFormValues = {
  body: string
}

const schema = object().shape({
  body: string().required(),
})

// TODO: implement
export const CommentForm: React.FC<CommentFormProps> = ({ authorName, authorImage, disabled, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<CommentFormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      body: '',
    },
  })

  return (
    <form className="card comment-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="card-block">
        <textarea className="form-control" placeholder="Write a comment..." rows={3} {...register('body')}></textarea>
      </div>
      <div className="card-footer">
        <UserIcon username={authorName} image={authorImage} width={30} height={30} />
        <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
        <button className="btn btn-sm btn-primary" disabled={!isValid}>
          Post Comment
        </button>
      </div>
    </form>
  )
}
