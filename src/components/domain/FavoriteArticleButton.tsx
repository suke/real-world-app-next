import * as React from 'react'
import { Article } from '@/types/domain/Article'
import { useFavoriteArticle } from '@/hooks/mutations/useFavoriteArticle'
import { useUnfavoriteArticle } from '@/hooks/mutations/useUnfavoriteArticle'
import { useCheckSignedIn } from '@/hooks/useCheckSignedIn'

type FavoriteArticleButtonProps = {
  article: Article
  omitText?: boolean
  onFavorite?: (article: Article) => void
  onUnfavorite?: (article: Article) => void
}

const InnerFavoriteArticleButton: React.FC<Omit<FavoriteArticleButtonProps, 'onUnfavorite'>> = ({
  article,
  omitText,
  onFavorite,
}) => {
  const mutation = useFavoriteArticle()
  const checkSignedIn = useCheckSignedIn()
  const handleClick = () => {
    checkSignedIn({ redirectTo: '/register' }).then(() => {
      if (mutation.isLoading) {
        return
      }
      mutation.mutate(
        {
          slug: article.slug,
        },
        {
          onSuccess: data => {
            if (onFavorite) {
              onFavorite(data)
            }
          },
        }
      )
    })
  }

  return (
    <button className={`btn btn-sm ${article.favorited ? 'btn-primary' : 'btn-outline-primary'}`} onClick={handleClick}>
      <i className="ion-heart"></i>
      {omitText && (
        <>
          &nbsp;<span className="counter">{article.favoritesCount}</span>
        </>
      )}
      {!omitText && (
        <>
          &nbsp; Favorite Post
          <span className="counter">({article.favoritesCount})</span>
        </>
      )}
    </button>
  )
}

const InnerUnfavoriteArticleButton: React.FC<Omit<FavoriteArticleButtonProps, 'onFavorite'>> = ({
  article,
  omitText,
  onUnfavorite,
}) => {
  const mutation = useUnfavoriteArticle()
  const handleClick = () => {
    if (mutation.isLoading) {
      return
    }
    mutation.mutate(
      {
        slug: article.slug,
      },
      {
        onSuccess: data => {
          if (onUnfavorite) {
            onUnfavorite(data)
          }
        },
      }
    )
  }

  return (
    <button className={`btn btn-sm ${article.favorited ? 'btn-primary' : 'btn-outline-primary'}`} onClick={handleClick}>
      <i className="ion-heart"></i>
      {omitText && (
        <>
          &nbsp;<span className="counter">{article.favoritesCount}</span>
        </>
      )}
      {!omitText && (
        <>
          &nbsp; Unfavorite Post
          <span className="counter">({article.favoritesCount})</span>
        </>
      )}
    </button>
  )
}

export const FavoriteArticleButton: React.FC<FavoriteArticleButtonProps> = ({
  article,
  omitText,
  onFavorite,
  onUnfavorite,
}) => {
  return article.favorited ? (
    <InnerUnfavoriteArticleButton article={article} omitText={omitText} onUnfavorite={onUnfavorite} />
  ) : (
    <InnerFavoriteArticleButton article={article} omitText={omitText} onFavorite={onFavorite} />
  )
}
