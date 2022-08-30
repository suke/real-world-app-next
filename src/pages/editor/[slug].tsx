import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next'
import { EditArticle } from '@/components/templates/EditArticle'
import { AuthGuard } from '@/components/guards/AuthGuard'

type EditArticlePageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const EditArticlePage: NextPage<EditArticlePageProps> = ({ slug }) => {
  return (
    <AuthGuard>
      <EditArticle slug={slug as string} />
    </AuthGuard>
  )
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext<{ slug: string }>) => {
  const slug = query.slug as string

  return {
    props: { slug },
  }
}

export default EditArticlePage
