import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next'
import { ShowArticle } from '@/components/templates/ShowArticle'

type EditArticlePageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const ArticlePage: NextPage<EditArticlePageProps> = ({ slug }) => <ShowArticle slug={slug} />

export const getServerSideProps = async ({ query }: GetServerSidePropsContext<{ slug: string }>) => {
  const slug = query.slug as string

  return {
    props: { slug },
  }
}

export default ArticlePage
