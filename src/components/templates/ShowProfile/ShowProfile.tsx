/* eslint-disable react/no-unescaped-entities */
import React, { useMemo, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useFetchUserProfile } from '@/hooks/queries/useFetchUserProfile'
import { useSearchArticle } from '@/hooks/queries/useSearchArticle'
import { SearchArticleOptions } from '@/types/api/requests/SearchArticleOptions'
import { ArticleList } from '@/components/domain/ArticleList'
import { Nav, NavItem } from '@/components/ui/Nav'
import { UserInfo } from './UserInfo'

type ShowProfileProps = {
  username: string
  articleTab: keyof typeof ArticleTabs
}

const ArticleTabs = {
  myArticles: 'myArticles',
  favoritedArticles: 'favoritedArticles',
} as const

export const ShowProfile: React.FC<ShowProfileProps> = ({ username, articleTab }) => {
  const [navItems, _setNavItems] = useState<NavItem[]>([
    { id: ArticleTabs.myArticles, text: 'My Articles', navigateTo: `/profile/${username}` },
    { id: ArticleTabs.favoritedArticles, text: 'Favorited Articles', navigateTo: `/profile/${username}/favorites` },
  ])
  const defaultNav = navItems.find(item => item.id === articleTab)!
  const { currentUser } = useAuth()
  const searchOptions: SearchArticleOptions = useMemo(() => {
    if (articleTab === ArticleTabs.myArticles) {
      return { author: username }
    } else {
      return { favorited: username }
    }
  }, [username, articleTab])
  const { data: user } = useFetchUserProfile({ username })
  const { data: articleRes, isLoading: isArticleLoading } = useSearchArticle(searchOptions)

  return (
    <div className="profile-page">
      {user && (
        <>
          <UserInfo currentUser={currentUser} targetUserProfile={user!} />
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <div className="articles-toggle">
                  <Nav navItems={navItems} defaultNav={defaultNav.id} />
                </div>
                <ArticleList articles={articleRes?.articles ?? []} isLoading={isArticleLoading} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
