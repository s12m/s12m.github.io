import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header className='navbar bg-base-100 px-2'>
        <div className='flex-1'>
          <Link to='/'>
            <StaticImage src='../images/icon.png' alt='株式会社スマートアルゴリズム' className='w-10' />
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <Link to='/about/'>会社案内</Link>
            </li>
          </ul>
        </div>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
