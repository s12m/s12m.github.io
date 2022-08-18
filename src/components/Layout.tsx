import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Hamburger from 'hamburger-react'

const Layout: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <>
      <div className='drawer drawer-end'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer' className='drawer-overlay'></label>
          <ul className='menu p-4 overflow-y-auto w-4/5 bg-base-100 text-base-content'>
            <li><Link to='/news/'>お知らせ</Link></li>
            <li><Link to='/about/'>会社案内</Link></li>
            <li><a>お客様インタビュー<ChevronDownIcon width={16} /></a></li>
            <li className='ml-4'><Link to='/interviews/vook/'>株式会社Vook様</Link></li>
            <li className='ml-4'><Link to='/interviews/buildit/'>株式会社ビルディット様</Link></li>
            <li className='ml-4'><Link to='/interviews/codeorjp/'>NPO法人みんなのコード様</Link></li>
            <li><a href='mailto:contact@smartalgorithm.co.jp' className='bg-s12m-red text-s12m-gray font-bold'>お問い合わせ</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

const Header = () => {
  return (
    <header className='navbar fixed px-4 pt-4 z-10'>
      <div className='flex-1'>
        <Link to='/' className='bg-base-100/80 rounded-box shadow-md px-4 py-2'>
          <StaticImage src='../images/logo/landscape.png' alt='' height={64} />
        </Link>
      </div>
      <div className='flex-none bg-base-100/80 rounded-box shadow-md p-4'>
        <label htmlFor='my-drawer' className='md:hidden'>
          <Hamburger toggled={false} />
        </label>
        <ul className='hidden md:flex menu menu-horizontal p-0'>
          <li><Link to='/news/'>お知らせ</Link></li>
          <li><Link to='/about/'>会社案内</Link></li>
          <li>
            <a>お客様インタビュー<ChevronDownIcon width={16} /></a>
            <ul className='bg-base-100 shadow-md rounded-box'>
              <li><Link to='/interviews/vook/'>株式会社Vook様</Link></li>
              <li><Link to='/interviews/buildit/'>株式会社ビルディット様</Link></li>
              <li><Link to='/interviews/codeorjp/'>NPO法人みんなのコード様</Link></li>
            </ul>
          </li>
          <li><a href='mailto:contact@smartalgorithm.co.jp' className='bg-s12m-red text-s12m-gray font-bold'>お問い合わせ</a></li>
        </ul>
      </div>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className='footer footer-center p-10 bg-base-200'>
      <div>
        <StaticImage src='../images/logo/cube.png' alt='株式会社スマートアルゴリズム' width={48} height={48} />
        <p>&copy; 2022 Smart Algorithm Co., Ltd.</p>
      </div>
    </footer>
  )
}

export default Layout
