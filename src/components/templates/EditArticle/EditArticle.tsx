import React, { useCallback, useState } from 'react'
import { useUpdateArticle } from '@/hooks/mutations/useUpdateArticle'
import { useFetchArticle } from '@/hooks/queries/useFetchArticle'
import { MemoErrorMessages } from '@/components/ui/ErrorMessages'
import { toApiError } from '@/utils/errors/toApiError'
import { ArticleForm, ArticleFormValue } from '@/components/forms/ArticleForm'

type EditArticleProps = {
  slug: string
}

export const EditArticle: React.FC<EditArticleProps> = ({ slug }) => {
  const { data, isLoading } = useFetchArticle({ slug })
  const [error, setError] = useState({})
  const mutation = useUpdateArticle()
  const onSubmit = useCallback(
    (values: ArticleFormValue) => {
      mutation.mutate(
        {
          slug,
          article: {
            title: values.title,
            description: values.description,
            body: values.body,
            tagList: values.tagList.map(tag => tag.name),
          },
        },
        {
          onError: error => {
            setError(toApiError(error))
          },
        }
      )
    },
    [slug]
  )

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <MemoErrorMessages errors={error} />
            {!isLoading && <ArticleForm defaultValue={data} disabled={mutation.isLoading} onSubmit={onSubmit} />}
          </div>
        </div>
      </div>
    </div>
  )
}
