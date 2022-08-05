import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const TopMemberList = () => {
  return (
    <div className='flex flex-col gap-4 w-1/2 m-auto'>
      <StaticImage src='../images/member/profile.jpg' alt='' className='w-1/3 rounded-full m-auto' />
      <h3 className='text-center text-xl'>齋藤 和也</h3>
      <div className='flex gap-2 m-auto'>
        <a href='https://github.com/mokichi' target='_blank'><i className='devicon-github-original colored text-[32px]' /></a>
        <a href='https://qiita.com/mokichi' target='_blank'><StaticImage src='../images/devicon/qiita.png' alt='' width={32} className='rounded-full' /></a>
        <a href='https://twitter.com/mokichi_s12m' target='_blank'><i className='devicon-twitter-original colored text-[28px] align-text-top' /></a>
      </div>
      <p>福岡県出身、九州工業大学情報工学部卒。</p>
      <p>フリーランスとして2年ほど、Webサービスやスマートフォンアプリの受託開発を中心に活動。アジャイル開発を実践し、保守性・拡張性の高い設計を得意とする。独立前は研究用ソフトウェアの開発に従事しており、機械学習や自然言語処理といった分野にも明るい。</p>
      <p>2015年1月、株式会社スマートアルゴリズムを設立、代表取締役に就任。その他複数社で技術顧問を務める。</p>
    </div>
  )
}

export default TopMemberList
