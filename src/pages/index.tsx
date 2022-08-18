import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Layout from '../components/Layout'
import Divider from '../components/Divider'
import Container from '../components/Container'
import LatestNews from '../components/LatestNews'
import TopMemberList from '../components/TopMemberList'
import TopInterviewList from '../components/TopInterviewList'
import TopWorkList from '../components/TopWorkList'
import TopTechnologyList from '../components/TopTechnologyList'
import MetaTags from '../components/MetaTags'

const Page = () => {
  const scrollToSecondSection = () => {
    document
      .querySelectorAll('section')[1]
      ?.scrollIntoView({
        behavior: 'smooth'
      })
  }

  return (
    <Layout>
      <div className='relative'>
        <section className='flex items-center justify-center h-screen bg-base-100 px-4 md:px-0'>
          <div className='text-center'>
            <StaticImage src='../images/logo/portrait.png' alt='株式会社スマートアルゴリズム' height={256} />
            <h1 className='text-2xl text-s12m-blue whitespace-nowrap'>情報科学でビジネスを前に進める</h1>
            <p className='py-6'>問題の本質を見抜き、ITの原理原則を理解した上で最適な解のために使いこなせる技術者こそ、<br />ビジネス課題の根本的かつ迅速な解決に必要です</p>
            <a href='mailto:contact@smartalgorithm.co.jp' className='btn bg-s12m-red border-s12m-red text-s12m-gray font-bold'>ご相談はこちらから</a>
          </div>
        </section>
        <div className='absolute bottom-4 inset-x-0 text-center'>
          <ChevronDownIcon className='m-auto w-16 stroke-[0.5] hover:cursor-pointer' onClick={scrollToSecondSection} />
        </div>
      </div>
      <Divider />
      <Section>
        <SectionHeader title='NEWS' />
        <Container>
          <LatestNews />
          <div className='text-center mt-4'>
            <Link to='/news/' className='link'>すべてのお知らせを見る</Link>
          </div>
        </Container>
      </Section>
      <Divider />
      <Section>
        <SectionHeader title='MEMBER' />
        <Container>
          <TopMemberList />
        </Container>
      </Section>
      <Divider />
      <Section>
        <SectionHeader title='INTERVIEW' />
        <Container>
          <TopInterviewList />
        </Container>
      </Section>
      <Divider />
      <Section>
        <SectionHeader title='WORK' />
        <Container>
          <TopWorkList />
        </Container>
      </Section>
      <Divider />
      <Section>
        <SectionHeader title='TECHNOLOGY' />
        <Container>
          <TopTechnologyList />
        </Container>
      </Section>
    </Layout>
  )
}

const Section: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <section className='py-16'>{children}</section>
  )
}

const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h2 className='text-2xl text-s12m-blue text-center mb-10'>{title}</h2>
  )
}

export default Page

export function Head() {
  return (
    <MetaTags
      title='株式会社スマートアルゴリズム | 情報科学でビジネスを前に進める'
    >
    </MetaTags>
  )
}
