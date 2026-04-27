import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const TopMemberList = () => {
  return (
    <div className='flex flex-col gap-4 w-full md:w-1/2 m-auto'>
      <StaticImage placeholder='none' src='../images/member/mokichi.jpg' alt='' width={192} className='w-1/3 mask mask-circle m-auto' />
      <h3 className='text-center text-xl'>齋藤 和也<div className='text-xs'>（代表取締役 / テクニカルアーキテクト）</div></h3>
      <div className='flex gap-2 m-auto'>
        <a href='https://github.com/mokichi' target='_blank'><i className='devicon-github-original colored text-[32px]' /></a>
        <a href='https://qiita.com/mokichi' target='_blank'><StaticImage placeholder='none' src='../images/devicon/qiita.png' alt='' width={32} className='mask mask-circle' /></a>
        <a href='https://speakerdeck.com/mokichi' target='_blank'><StaticImage placeholder='none' src='../images/devicon/speakerdeck.svg' alt='' width={32} className='mt-[6px]' /></a>
        <a href='https://twitter.com/mokichi_s12m' target='_blank'><i className='devicon-twitter-original colored text-[28px] align-text-top' /></a>
      </div>
      <div className='flex flex-col gap-2'>
        <p>福岡県出身、九州工業大学情報工学部卒。1児の父。</p>
        <p>成長企業の技術構造を整えるテクニカルアーキテクト。複雑なシステム設計をシンプルに分解し、コストと将来リスクを抑えた構造を作る。提案から構築まで責任を持ち、中長期にわたって伴走するのが特徴。</p>
        <p>Webバックエンド、クラウドインフラ、アーキテクチャ設計が得意。Elixirを特に好み、情報発信やコミュニティ活動に勤しむ。</p>
        <p>2015年、株式会社スマートアルゴリズムを設立、代表取締役に就任。書籍『Elixir実践入門』共著者。</p>
      </div>
    </div>
  )
}

export default TopMemberList
