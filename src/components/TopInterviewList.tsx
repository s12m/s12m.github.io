import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import CardList from './CardList'
import Card from './Card'
import CardBody from './CardBody'
import CardTitle from './CardTitle'
import ExternalLink from './ExternalLink'

const TopInterviewList = () => {
  return (
    <CardList>
      <Card>
        <figure>
          <StaticImage placeholder='none' src='../images/interview/vook/top.jpg' alt='' aspectRatio={16/9} />
        </figure>
        <CardBody>
          <CardTitle>株式会社Vook様</CardTitle>
          <p>映像制作者向けプラットフォーム「<ExternalLink href='https://vook.vc/'>Vook</ExternalLink>」の開発を支援しています。</p>
          <More to='/interviews/vook/' />
        </CardBody>
      </Card>
      <Card>
        <figure>
          <StaticImage placeholder='none' src='../images/interview/buildit/top.jpg' alt='' aspectRatio={16/9} />
        </figure>
        <CardBody>
          <CardTitle>株式会社ビルディット様</CardTitle>
          <p>ビルディット様が請け負っている業務システムの設計・開発面で協業しています。</p>
          <More to='/interviews/buildit/' />
        </CardBody>
      </Card>
      <Card>
        <figure>
          <StaticImage placeholder='none' src='../images/interview/codeorjp/top.jpg' alt='' aspectRatio={16/9} />
        </figure>
        <CardBody>
          <CardTitle>NPO法人みんなのコード様</CardTitle>
          <p>学校向けプログラミング教材「<ExternalLink href='https://proguru.jp/'>プログル</ExternalLink>」の開発を支援しています。</p>
          <More to='/interviews/codeorjp/' />
        </CardBody>
      </Card>
    </CardList>
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
