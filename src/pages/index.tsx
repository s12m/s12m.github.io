import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Container from '../components/Container'
import LatestNews from '../components/LatestNews'

const Page = () => {
  return (
    <Layout>
      <section className='flex items-center justify-center h-screen bg-base-100'>
        <div className='text-center'>
          <StaticImage src='../images/logo/portrait.png' alt='株式会社スマートアルゴリズム' height={256} />
          <h1 className='text-2xl text-s12m-blue'>情報科学でビジネスを前に進める</h1>
          <p className='py-6'>問題の本質を見抜き、ITの原理原則を理解した上で最適な解のために使いこなせる技術者こそ、<br />ビジネス課題の根本的かつ迅速な解決に必要です</p>
        </div>
      </section>
      <div className='divider' />
      <section className='py-8'>
        <h2 className='text-2xl text-s12m-blue text-center mb-4'>最新のお知らせ</h2>
        <Container>
          <LatestNews />
          <div className='text-center mt-4'>
            <Link to="/news/" className='link'>すべてのお知らせを見る</Link>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default Page
