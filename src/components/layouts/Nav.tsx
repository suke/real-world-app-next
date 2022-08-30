import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'
import React from 'react'

const Nav: React.FC = () => {
  const { currentUser } = useAuth()

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">conduit</a>
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/* <!-- Add "active" class when you're on that page" --> */}
            <Link href="/">
              <a className="nav-link active">Home</a>
            </Link>
          </li>

          {currentUser && (
            <>
              <li className="nav-item">
                <Link href="/editor">
                  <a className="nav-link" href="">
                    <i className="ion-compose"></i>&nbsp;New Article
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/settings">
                  <a className="nav-link">
                    <i className="ion-gear-a"></i>&nbsp;Settings
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={`/profile/${currentUser.username}`}>
                  <a className="nav-link">&nbsp;{currentUser.username}</a>
                </Link>
              </li>
            </>
          )}

          {!currentUser && (
            <>
              <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link">Sign in</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/register">
                  <a className="nav-link" href="">
                    Sign up
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default React.memo(Nav)
