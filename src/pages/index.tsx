import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Divider from '../components/Divider'
import Container from '../components/Container'
import LatestNews from '../components/LatestNews'
import TopInterviewList from '../components/TopInterviewList'
import TopWorkList from '../components/TopWorkList'

const Page = () => {
  return (
    <Layout>
      <section className='flex items-center justify-center h-[80vh] bg-base-100'>
        <div className='mt-16 text-center'>
          <StaticImage src='../images/logo/portrait.png' alt='株式会社スマートアルゴリズム' height={256} />
          <h1 className='text-2xl text-s12m-blue'>情報科学でビジネスを前に進める</h1>
          <p className='py-6'>問題の本質を見抜き、ITの原理原則を理解した上で最適な解のために使いこなせる技術者こそ、<br />ビジネス課題の根本的かつ迅速な解決に必要です</p>
        </div>
      </section>
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
          <div className='grid grid-cols-8 gap-y-8'>
            <i className='devicon-ruby-plain-wordmark colored text-8xl text-center'></i>
            <i className='devicon-rails-plain-wordmark colored text-8xl text-center'></i>
            <i className='devicon-elixir-plain-wordmark colored text-8xl text-center'></i>
            <i className='devicon-phoenix-plain-wordmark colored text-8xl text-center'></i>
            <i className='devicon-nodejs-plain-wordmark colored text-8xl text-center'></i>
            <i className='devicon-typescript-plain colored text-8xl text-center'></i>
            <i className='devicon-react-original-wordmark colored text-8xl text-center'></i>
            <i className='devicon-vuejs-plain-wordmark colored text-8xl text-center'></i>
            <i className='devicon-mysql-plain-wordmark colored text-8xl text-center'></i>
            <i className='devicon-postgresql-plain-wordmark colored text-8xl text-center'></i>
            <i className='devicon-redis-plain-wordmark colored text-8xl text-center'></i>
            <div className='bg-[url("../images/devicon/elastic.svg")] bg-contain bg-center bg-no-repeat' />
            <i className='devicon-amazonwebservices-plain-wordmark colored text-8xl text-center'></i>
            <i className='devicon-googlecloud-plain-wordmark colored text-8xl text-center'></i>
            <i className='devicon-terraform-plain-wordmark colored text-8xl text-center'></i>
            <i className='devicon-kubernetes-plain-wordmark colored text-8xl text-center'></i>
          </div>
          <div className='text-center mt-8'>
            and more
          </div>
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
