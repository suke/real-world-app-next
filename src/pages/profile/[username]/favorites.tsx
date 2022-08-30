import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next'
import { ShowProfile } from '@/components/templates/ShowProfile'

type ProfilePageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const ProfilePage: NextPage<ProfilePageProps> = ({ username }) => {
  return <ShowProfile username={username} articleTab="favoritedArticles" />
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext<{ username: string }>) => {
  const username = query.username as string

  return {
    props: { username },
  }
}

export default ProfilePage
