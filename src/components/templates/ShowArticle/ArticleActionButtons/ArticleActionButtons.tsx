import { FavoriteArticleButton } from '@/components/domain/FavoriteArticleButton'
import { FollowUserButton } from '@/components/domain/FollowUserButton'
import { Article } from '@/types/domain'
import { useActionButtonHandler } from '../contexts/ActionButtonHandlerContext'
import styles from './ArticleActionButtons.module.css'

type ArticleActionButtonsProps = {
  article: Article
}

export const ArticleActionButtons: React.FC<ArticleActionButtonsProps> = ({ article }) => {
  const { handleFollowUser, handleUnfollowUser } = useActionButtonHandler()!
  return (
    <div className={styles.buttons}>
      <div className={styles.button}>
        <FollowUserButton target={article.author} onFollow={handleFollowUser} onUnfollow={handleUnfollowUser} />
      </div>
      <div className={styles.button}>
        <FavoriteArticleButton article={article} />
      </div>
    </div>
  )
}
