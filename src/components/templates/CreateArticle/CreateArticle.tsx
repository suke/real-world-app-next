import { useCreateArticle } from '@/hooks/mutations/useCreateArticle'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { ArticleForm, ArticleFormValue } from '@/components/forms/ArticleForm'

export const CreateArticle: React.FC = () => {
  const router = useRouter()
  const mutation = useCreateArticle()
  const onSubmit = useCallback((values: ArticleFormValue) => {
    mutation.mutate(
      {
        title: values.title,
        description: values.description,
        body: values.body,
        tagList: values.tagList.map(tag => tag.name),
      },
      {
        onSuccess: res => {
          router.push(`/article/${res.slug}`)
        },
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ArticleForm onSubmit={onSubmit} disabled={mutation.isLoading} />
          </div>
        </div>
      </div>
    </div>
  )
}
