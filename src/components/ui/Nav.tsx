import Link from 'next/link'
import React, { PropsWithChildren, useState } from 'react'

export type NavItem = {
  id: string
  text: string
  iconClass?: string
  navigateTo?: string
}

type NavProps = {
  navItems: NavItem[]
  defaultNav: string
  onNavChange?: (navItem: NavItem) => void
}

export const Nav: React.FC<NavProps> = ({ navItems, defaultNav, onNavChange }) => {
  const [currentNav, setNav] = useState(defaultNav)
  const handleNavChange = (item: NavItem) => {
    setNav(item.id)
    if (onNavChange) {
      onNavChange(item)
    }
  }
  return (
    <ul className="nav nav-pills outline-active">
      {navItems.map(item => (
        <li key={item.id} className="nav-item">
          {item.navigateTo && (
            <Link href={item.navigateTo}>
              <a className={`nav-link ${currentNav === item.id ? 'active' : ''}`} onClick={() => handleNavChange(item)}>
                {item.text}
              </a>
            </Link>
          )}
          {!item.navigateTo && (
            <a className={`nav-link ${currentNav === item.id ? 'active' : ''}`} onClick={() => handleNavChange(item)}>
              {item.text}
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}
