import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import CardList from './CardList'
import Card from './Card'
import CardBody from './CardBody'
import CardTitle from './CardTitle'
import ExternalLink from './ExternalLink'

const TopWorkList = () => {
  return (
    <CardList>
      <Card>
        <Figure>
          <StaticImage src='../images/work/agile.png' alt='' aspectRatio={16/9} />
          <FigureCaption>
            From Planbox (Own work) [CC BY-SA 3.0],
            <br />
            <ExternalLink href='https://commons.wikimedia.org/wiki/File%3AAgile_Project_Management_by_Planbox.png'>via Wikimedia Commons</ExternalLink>
          </FigureCaption>
        </Figure>
        <CardBody>
          <CardTitle>Webシステム開発</CardTitle>
          <div><NegativeText>ビジネスの状況に合うようにシステムを開発できず</NegativeText>、ボトルネックになっていませんか？</div>
          <ul className='list-disc ml-4'>
            <li>開発リソースが足りない</li>
            <li>問題定義や技術選定が適切にできていない</li>
            <li>要件定義や設計が甘く、思うように開発を進められない</li>
          </ul>
          <div>システムは作ってからがスタートで、ビジネスの状況に応じてスピーディーに改善していかなければいけません。アジャイル開発を実践してきた技術者が、<PositiveText>問題を根本的に解決するためのWebシステム開発</PositiveText>を支援します。</div>
        </CardBody>
      </Card>
      <Card>
        <Figure>
          <StaticImage src='../images/work/devops.svg' alt='' aspectRatio={16/9} />
          <FigureCaption>
            From Kharnagy (Own work) [CC BY-SA 4.0],
            <br />
            <ExternalLink href='https://commons.wikimedia.org/wiki/File%3ADevops-toolchain.svg'>via Wikimedia Commons</ExternalLink>
          </FigureCaption>
        </Figure>
        <CardBody>
          <CardTitle>DevOps推進</CardTitle>
          <div>開発からリリースまでに時間がかかってしまい、<NegativeText>新しい価値をスピーディーに届けられない</NegativeText>という課題はありませんか？</div>
          <ul className='list-disc ml-4'>
            <li>テストやデプロイが自動化されていない</li>
            <li>構成管理やシステム運用のノウハウを持っていない</li>
            <li>システムの品質に不安があり、安心してリリースできない</li>
          </ul>
          <div>開発と運用が連携しやすい環境を整えることで、開発効率は大きく向上します。多くの企業でDevOpsを推進してきた実績をもとに、開発フローの最適化を行い、<PositiveText>迅速かつ確実にビジネスの価値を届け続けられる環境づくり</PositiveText>を支援します。</div>
        </CardBody>
      </Card>
      <Card>
        <Figure>
          <StaticImage src='../images/work/mokichi.jpg' alt='' aspectRatio={16/9} />
          <FigureCaption>
            代表取締役　齋藤 和也
            <br />
            Photo by <ExternalLink href='https://ryonosuke-kaneko.com/'>Ryonosuke Kaneko</ExternalLink>
          </FigureCaption>
        </Figure>
        <CardBody>
          <CardTitle>技術顧問</CardTitle>
          <div>私がこれまで様々な会社を見てきて、<NegativeText>技術や人に関する課題</NegativeText>をお持ちのお客様が多くいらっしゃいました。</div>
          <ul className='list-disc ml-4'>
            <li>自社が得意としていない技術を必要に迫られて使っていたり、モダンな方法に切り替えられないでいたりする</li>
            <li>開発メンバーが持つスキルの差が大きい</li>
            <li>経験が浅い開発メンバーのレビューやメンタリングを満足にできていない</li>
          </ul>
          <div>多くのシステム開発に携わり複数社で技術顧問を務めてきた経験を活かし、お客様が<PositiveText>あまり得意としていない分野の技術的なサポート</PositiveText>や<PositiveText>開発メンバーの技術力の底上げ</PositiveText>を支援します。</div>
        </CardBody>
      </Card>
    </CardList>
  )
}

const Figure: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <figure className='flex-col'>{children}</figure>
  )
}

const FigureCaption: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <figcaption className='text-center text-xs h-8 mt-2'>{children}</figcaption>
  )
}

const NegativeText: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <span className='text-s12m-red font-bold'>{children}</span>
  )
}

const PositiveText: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <span className='text-s12m-blue font-bold'>{children}</span>
  )
}

export default TopWorkList
