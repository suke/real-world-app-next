import React, { useCallback, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Nav, NavItem } from '@/components/ui/Nav'
import { MyFeed } from '../MyFeed'
import { GlobalFeed } from '../GlobalFeed'
import { Tags } from '../Tags'

export const HomeContainer: React.FC = () => {
  const { currentUser } = useAuth()
  const defaultNav = currentUser
    ? [
        { id: 'myFeed', text: 'Your Feed' },
        { id: 'globalFeed', text: 'Global Feed' },
      ]
    : [{ id: 'globalFeed', text: 'Global Feed' }]
  const [navItems, setNavItems] = useState<NavItem[]>(defaultNav)
  const [currentNav, setCurrentNav] = useState<NavItem>(navItems[0])
  const handleNavChange = useCallback((item: NavItem) => {
    setCurrentNav(item)
  }, [])

  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <div className="feed-toggle">
            <Nav navItems={navItems} defaultNav={currentNav.id} onNavChange={handleNavChange} />
          </div>

          {currentNav.id === 'myFeed' ? <MyFeed /> : <GlobalFeed />}
        </div>
        <div className="col-md-3">
          <div className="sidebar">
            <Tags />
          </div>
        </div>
      </div>
    </div>
  )
}
