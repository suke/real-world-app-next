import { NextPage } from 'next'
import { CreateArticle } from '@/components/templates/CreateArticle'
import { AuthGuard } from '@/components/guards/AuthGuard'

const CreateArticlePage: NextPage = () => {
  return (
    <AuthGuard>
      <CreateArticle />
    </AuthGuard>
  )
}

export default CreateArticlePage
