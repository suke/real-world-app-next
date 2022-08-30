/* eslint-disable react/no-unescaped-entities */
import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import { useFetchArticle } from '@/hooks/queries/useFetchArticle'
import { useSyncArticleAuthor } from '@/hooks/mutations/useSyncProfileCache'
import { CommentForm } from '@/components/forms/CommentForm'
import { Profile } from '@/types/domain'
import { isEmptyArticle } from '@/utils/isEmptyArticle'
import { ArticleBanner } from './ArticleBanner/ArticleBanner'
import { ArticleContent } from './ArticleContent'
import { ArticleMeta } from './ArticleMeta'
import styles from './ShowArticle.module.css'
import { ActionButtonHandlerProvider } from './contexts/ActionButtonHandlerContext'

type ArticleProps = {
  slug: string
}

export const ShowArticle: React.FC<ArticleProps> = ({ slug }) => {
  const { data: article, isLoading } = useFetchArticle({ slug })
  const router = useRouter()

  if (isLoading) {
    return <div className="article-page"></div>
  }

  if (isEmptyArticle(article) && !isLoading) {
    router.push('/')
    return <></>
  }

  return (
    <ActionButtonHandlerProvider slug={slug}>
      <div className="article-page">
        <ArticleBanner article={article!} />
        <div className="container page">
          <div className={`article-actions ${styles.articleActions}`}>
            <ArticleMeta article={article!} />
          </div>
          <ArticleContent article={article!} />
          <hr />
          {/* // TODO: コメントを実装する */}
          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              <CommentForm
                authorName={article!.author.username}
                authorImage={article!.author.image}
                onSubmit={values => console.log(values)}
              />

              <div className="card">
                <div className="card-block">
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                  <a href="" className="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                  </a>
                  &nbsp;
                  <a href="" className="comment-author">
                    Jacob Schmidt
                  </a>
                  <span className="date-posted">Dec 29th</span>
                </div>
              </div>

              <div className="card">
                <div className="card-block">
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                  <a href="" className="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                  </a>
                  &nbsp;
                  <a href="" className="comment-author">
                    Jacob Schmidt
                  </a>
                  <span className="date-posted">Dec 29th</span>
                  <span className="mod-options">
                    <i className="ion-edit"></i>
                    <i className="ion-trash-a"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ActionButtonHandlerProvider>
  )
}
