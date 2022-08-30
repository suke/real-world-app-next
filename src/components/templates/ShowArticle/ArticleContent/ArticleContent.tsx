import { MemoTag } from '@/components/ui/Tag'
import { Article } from '@/types/domain/Article'

type ArticleContentProps = {
  article: Article
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  return (
    <div className="row article-content">
      <div className="col-md-12">
        <p>{article?.body}</p>
        {article.tagList.length !== 0 && (
          <ul className="tag-list">
            {article.tagList.map(tag => (
              <MemoTag key={tag} name={tag} withOutline={true} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
