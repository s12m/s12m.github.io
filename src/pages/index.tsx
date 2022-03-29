import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

const Page = () => {
  return (
    <Layout>
      <div className='hero min-h-screen bg-base-100'>
        <div className='hero-content text-center'>
          <div>
            <StaticImage src='../images/logo/portrait.png' alt='株式会社スマートアルゴリズム' height={256} />
            <h1 className='text-2xl text-s12m-blue'>情報科学でビジネスを前に進める</h1>
            <p className='py-6'>問題の本質を見抜き、ITの原理原則を理解した上で最適な解のために使いこなせる技術者こそ、<br />ビジネス課題の根本的かつ迅速な解決に必要です</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page
