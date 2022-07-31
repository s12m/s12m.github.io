import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import ExternalLink from './ExternalLink'

const TopInterviewList = () => {
  return (
    <div className='flex gap-6'>
      <Card>
        <figure>
          <StaticImage src='../images/interview/vook/top.jpg' alt='' aspectRatio={16/9} />
        </figure>
        <CardBody>
          <CardTitle
            href='https://vook.co.jp/'
            title='株式会社Vook様' />
          <p>映像制作者向けプラットフォーム「<ExternalLink href='https://vook.vc/'>Vook</ExternalLink>」の開発を支援しています。</p>
          <More to='/interviews/vook/' />
        </CardBody>
      </Card>
      <Card>
        <figure>
          <StaticImage src='../images/interview/buildit/top.jpg' alt='' aspectRatio={16/9} />
        </figure>
        <CardBody>
          <CardTitle
            href='https://bldt.jp/'
            title='株式会社ビルディット様' />
          <p>ビルディット様が請け負っている業務システムの設計・開発面で協業しています。</p>
          <More to='/interviews/buildit/' />
        </CardBody>
      </Card>
      <Card>
        <figure>
          <StaticImage src='../images/interview/codeorjp/top.jpg' alt='' aspectRatio={16/9} />
        </figure>
        <CardBody>
          <CardTitle
            href='https://code.or.jp/'
            title='NPO法人みんなのコード様' />
          <p>学校向けプログラミング教材「<ExternalLink href='https://proguru.jp/'>プログル</ExternalLink>」の開発を支援しています。</p>
          <More to='/interviews/codeorjp/' />
        </CardBody>
      </Card>
    </div>
  )
}

const Card: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <div className='card w-full bg-base-100 shadow-md'>{children}</div>
  )
}

const CardBody: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <div className='card-body'>{children}</div>
  )
}

const CardTitle: React.FC<{ href: string, title: string }> = ({ href, title }) => {
  return (
    <h3 className='card-title text-s12m-blue'>
      <ExternalLink href={href}>{title}</ExternalLink>
    </h3>
  )
}

const More: React.FC<{ to: string }> = ({ to }) => {
  return (
    <div className='card-actions justify-end'>
      <Link to={to} className='link'>もっと読む</Link>
    </div>
  )
}

export default TopInterviewList
