import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Hamburger from 'hamburger-react'
import InquiryLink from './InquiryLink'

const Layout: React.FC<HasChildrenProps> = ({ children }) => {
  return (
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
        <DrawerMenu />
      </div>
    </div>
  )
}

const DrawerMenu = () => {
  return (
    <ul className='menu p-4 overflow-y-auto w-4/5 md:w-2/5 bg-base-100 text-base-content'>
      <li><Link to='/news/'>お知らせ</Link></li>
      <li><Link to='/about/'>会社案内</Link></li>
      <li><a href='#'>お客様インタビュー<ChevronDownIcon width={16} /></a></li>
      <li className='ml-4'><Link to='/interviews/vook/'>株式会社Vook様</Link></li>
      <li className='ml-4'><Link to='/interviews/buildit/'>株式会社ビルディット様</Link></li>
      <li className='ml-4'><Link to='/interviews/codeorjp/'>NPO法人みんなのコード様</Link></li>
      <li><InquiryLink>お問い合わせ</InquiryLink></li>
    </ul>
  )
}

const Header = () => {
  return (
    <header className='navbar fixed p-4 z-10'>
      <div className='container mx-auto max-w-6xl justify-between'>
        <Link to='/' className='bg-base-100/80 rounded-box shadow-md px-4 py-2'>
          <StaticImage placeholder='none' src='../images/logo/landscape.png' alt='' height={64} />
        </Link>
        <div className='bg-base-100/80 rounded-box shadow-md p-4'>
          <label htmlFor='my-drawer' className='lg:hidden'>
            <Hamburger toggled={false} label='menu' />
          </label>
          <ul className='hidden lg:flex menu menu-horizontal p-0'>
            <li><Link to='/news/'>お知らせ</Link></li>
            <li><Link to='/about/'>会社案内</Link></li>
            <li>
              <a href='#'>お客様インタビュー<ChevronDownIcon width={16} /></a>
              <ul className='bg-base-100 shadow-md rounded-box'>
                <li><Link to='/interviews/vook/'>株式会社Vook様</Link></li>
                <li><Link to='/interviews/buildit/'>株式会社ビルディット様</Link></li>
                <li><Link to='/interviews/codeorjp/'>NPO法人みんなのコード様</Link></li>
              </ul>
            </li>
            <li><a href='mailto:contact@smartalgorithm.co.jp' className='bg-s12m-red text-s12m-gray font-bold'>お問い合わせ</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className='footer footer-center p-10 bg-base-200'>
      <div>
        <StaticImage placeholder='none' src='../images/logo/cube.png' alt='株式会社スマートアルゴリズム' width={48} height={48} />
        <p>&copy; 2022 Smart Algorithm Co., Ltd.</p>
      </div>
    </footer>
  )
}

export default Layout
