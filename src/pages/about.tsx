import React from 'react'
import { HeadProps } from 'gatsby'
import Layout from '../components/Layout'
import Article from '../components/Article'
import Container from '../components/Container'
import MetaTags from '../components/MetaTags'

const Page = () => {
  return (
    <Layout>
      <Article title='会社案内'>
        <Container>
          <p className='mb-4 leading-8'>ソフトウェアを開発する敷居は、以前と比べて格段に下がりました。インターネットで調べればすぐに情報が見つかりますし、優れた開発環境も無料で入手できます。パブリッククラウドの普及で、サーバも数分で調達できます。</p>
          <p className='mb-4 leading-8'>一方で、技術革新によってビジネスに積極的に活用されるようになったWebシステムでは、ビジネスにおける重要性が高まり、<span className='text-s12m-red font-bold'>技術者への要求が高度に複雑化</span>しています。今後も新しい技術やビジネスモデルが次々と生まれ、<span className='text-s12m-red font-bold'>システム開発はより専門性を増していく</span>でしょう。</p>
          <p className='mb-4 leading-8'>目まぐるしく状況が変わる中、私たちは<span className='text-s12m-blue font-bold'>情報科学の理解が技術者に最も求められている</span>と考えています。</p>
          <p className='mb-4 leading-8'>昨今AIやVRがよく話題にあがりますが、基礎となる技術は何十年も前から存在しています。新しいプログラミング言語やライブラリ、フレームワークが出てきていますが、全く新しい概念が生み出されているということもめったにありません。ソフトウェアに関することは<span className='text-s12m-blue font-bold'>すべて情報科学という分野の上で成り立っています</span>。</p>
          <p className='mb-4 leading-8'>プロの技術者として問題を解決するのであれば、問題の本質と技術やツールの原理を理解した上で、最適な解のために使いこなさなければなりません。スマートアルゴリズムは、<span className='text-s12m-blue font-bold'>プロの技術者が1人でも増え、1つでも多くの問題が根本的に解決される世界を実現したい</span>のです。</p>
          {/*
            そのために、スマートアルゴリズムではアルゴリズムエンジニアという職業を提唱しています。

            定義
              情報科学をベースに、問題の本質を理解した上でアルゴリズムを考案・実装し、先見の明を持ったビジョナリーと共にビジネスを前に進めるエンジニア
            役割
              ビジネスモデルのシステム化にあたっての要件定義の支援
              アーキテクチャ設計からインフラ構築、アプリケーション開発までのシステム開発関連業務
              システムの継続的かつスピーディな改善
            スキル
              コンピュータ/プログラムの動作原理を理解している
              基本的なデータ構造やアルゴリズムを理解している
              最新技術のキャッチアップを欠かさず行い、どんな技術を応用しているか考えることができる
              ビジネスモデルをもとに、要件定義から設計・実装まで対応できる
              問題の本質を理解し、根本的に解決するために技術やツールを使いこなすことができる

            スマートアルゴリズムのビジョンに少しでも共感してくださる方がいれば幸いです。
          */}
          <div className='divider' />
          <div className='flex'>
            <div className='w-1/5 min-w-[8em] font-bold'>社名</div>
            <div className='w-4/5'>株式会社スマートアルゴリズム</div>
          </div>
          <div className='divider' />
          <div className='flex'>
            <div className='w-1/5 min-w-[8em] font-bold'>設立</div>
            <div className='w-4/5'>2015年1月29日</div>
          </div>
          <div className='divider' />
          <div className='flex'>
            <div className='w-1/5 min-w-[8em] font-bold'>資本金</div>
            <div className='w-4/5'>2,000,000円</div>
          </div>
          <div className='divider' />
          <div className='flex'>
            <div className='w-1/5 min-w-[8em] font-bold'>所在地</div>
            <div className='w-4/5'>〒115-0045<br />東京都北区赤羽1-7-9 赤羽第一葉山ビル4階</div>
          </div>
          <div className='divider' />
          <div className='flex'>
            <div className='w-1/5 min-w-[8em] font-bold'>営業時間</div>
            <div className='w-4/5'>月〜金 10:00〜18:00 ※土日祝日は定休日</div>
          </div>
          <div className='divider' />
          <div className='flex'>
            <div className='w-1/5 min-w-[8em] font-bold'>代表取締役</div>
            <div className='w-4/5'>齋藤 和也</div>
          </div>
          <div className='divider' />
          <div className='flex'>
            <div className='w-1/5 min-w-[8em] font-bold'>事業内容</div>
            <ul className='w-4/5 list-disc ml-4'>
              <li>ソフトウェアの企画、設計、開発、販売、運用、保守及び管理</li>
              <li>アプリケーションの企画、開発及び販売</li>
              <li>情報通信ネットワークを利用した各種情報提供サービス業及び各種情報処理サービス業</li>
              <li>コンピュータソフトウェアに関する教育研修事業</li>
            </ul>
          </div>
        </Container>
      </Article>
    </Layout>
  )
}

export default Page

export function Head({ location }: HeadProps) {
  return (
    <MetaTags
      pathname={location.pathname}
      title='会社案内 | 株式会社スマートアルゴリズム'
    >
    </MetaTags>
  )
}
