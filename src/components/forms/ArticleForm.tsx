import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useFieldArray } from 'react-hook-form'
import { object, string, array } from 'yup'
import { Article } from '@/types/domain/Article'

type ArticleFormProps = {
  onSubmit: (values: ArticleFormValue) => void
  defaultValue?: Partial<Article>
  disabled?: boolean
}

const schema = object().shape({
  title: string().required(),
  description: string().required(),
  body: string().required(),
  tagList: array().of(object({ name: string() })),
})

type Tag = {
  name: string
}

export type ArticleFormValue = {
  title: string
  description: string
  body: string
  tagList: Tag[]
}

export const ArticleForm: React.FC<ArticleFormProps> = ({ onSubmit, disabled = false, defaultValue = {} }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<ArticleFormValue>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      title: defaultValue.title ?? '',
      description: defaultValue.description ?? '',
      body: defaultValue.body ?? '',
      tagList: defaultValue.tagList?.length !== 0 ? defaultValue.tagList?.map(tag => ({ name: tag })) : [],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tagList',
  })

  const appendTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      append({ name: event.currentTarget.value })
      event.currentTarget.value = ''
    }
  }
  const removeTag = (index: number) => remove(index)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={disabled}>
        <fieldset className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Article Title"
            {...register('title')}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="What's this article about?"
            {...register('description')}
          />
        </fieldset>
        <fieldset className="form-group">
          <textarea
            className="form-control"
            rows={8}
            placeholder="Write your article (in markdown)"
            {...register('body')}
          ></textarea>
        </fieldset>
        <fieldset className="form-group">
          <input type="text" className="form-control" placeholder="Enter tags" onKeyDown={appendTag} />
          <div className="tag-list">
            {fields.map((item, index) => (
              <span className="tag-default tag-pill" key={item.id}>
                <i className="ion-close-round" onClick={() => removeTag(index)}></i>
                {item.name}
              </span>
            ))}
          </div>
        </fieldset>
        <section></section>
        <button className="btn btn-lg pull-xs-right btn-primary" disabled={!isValid || disabled}>
          Publish Article
        </button>
      </fieldset>
    </form>
  )
}
