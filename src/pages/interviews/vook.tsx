import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import Article from '../../components/Article'
import InterviewTop from '../../components/InterviewTop'
import TopImage from '../../images/interview/vook/top.jpg'
import Container from '../../components/Container'
import ExternalLink from '../../components/ExternalLink'
import InterviewQuestion from '../../components/InterviewQuestion'
import InterviewAnswer from '../../components/InterviewAnswer'
import MetaTags from '../../components/MetaTags'

const Page = () => {
  return (
    <Layout>
      <InterviewTop companyName='株式会社Vook' image={TopImage} />
      <Article>
        <Container>
          <div className='mb-8'><ExternalLink href='https://vook.co.jp'>株式会社Vook</ExternalLink> 取締役の阿部様とWebデザイナーの種村様にご協力いただきました。<br />(2019年12月23日)</div>
          <div className='mb-8'>
            <InterviewQuestion>Vook様はどんな事業を行っていますか？</InterviewQuestion>
            <InterviewAnswer interviewee='阿部様(以下、敬称略)'>映像制作者向けのプラットフォームを作っています。映像制作者向けに、主に情報提供という面でWebサービスを展開しています。</InterviewAnswer>
          </div>
          <div className='mb-8'>
            <InterviewQuestion>お2人は社内でどんな立場でしょうか？</InterviewQuestion>
            <InterviewAnswer interviewee='阿部'>取締役を務めています。基本的には社内の業務全般を見ていて、薄く広くメンバーの業務をチェックしています。</InterviewAnswer>
            <InterviewAnswer interviewee='種村様(以下、敬称略)'>Webデザイナーをやっています。業務内容としては、WebサービスのUI作成、フロントのコーディング、Webデザイン、ディレクションなどをやっています。</InterviewAnswer>
          </div>
          <div className='mb-8'>
            <InterviewQuestion>弊社にどんな仕事を依頼していますか？</InterviewQuestion>
            <InterviewAnswer interviewee='阿部'>技術顧問や外部CTOのような立ち位置で、経営状況を踏まえたうえでのサービス設計や技術面を全般的にお願いしてます。</InterviewAnswer>
          </div>
          <div className='mb-8'>
            <InterviewQuestion>弊社に依頼して良かったと思うことはありますか？</InterviewQuestion>
            <div className='md:flex flex-row-reverse gap-4'>
              <div className='flex-[2]'>
                <InterviewAnswer interviewee='阿部'>開発メンバーの技術的なモチベーションがすごく上がっているところです。僕と代表はエンジニアだったりIT畑の人間ではないので、社員に与えるインセンティブとなると、どうしてもお金のような生々しいものになってしまいます。けれども、スマートアルゴリズムさんと仕事することによって、技術面の向上だったり、仕事が毎日楽しくなるようなひとつの要因になっています。</InterviewAnswer>
                <InterviewAnswer interviewee='種村'>フロントをやっているけれどあまり知識がある訳ではない中で、いつもデザイナーにもわかる言葉で丁寧に説明していただいています。知識の幅の広さと深さがすごく、投げかけたことへのフィードバックが適切で、デザイナーもエンジニアもうまく仕事が回っているので大変助かっています。</InterviewAnswer>
              </div>
              <figure className='flex-1'>
                <StaticImage src='../../images/interview/vook/image.jpg' alt='' width={336} className='w-full mb-2' />
                <figcaption className='text-center text-sm'>Webデザイナーの種村様(写真左)、取締役の阿部様(写真右)</figcaption>
              </figure>
            </div>
          </div>
          <div className='mb-8'>
            <InterviewQuestion>Vook様の今後の展望、またそこにあたって弊社に期待していることをお聞かせください。</InterviewQuestion>
            <InterviewAnswer interviewee='阿部'>今後の展望としては、クリエイティブハブというところをミッションにしてるので、それを実現するためのサービス作りをやっていきたいと考えています。具体的には、映像制作者が必要なところと映像制作者のやりたいことのマッチングなどです。今後もサービス内容自体が広がっていくので、技術面での全体的なハンドリングをお任せしていきたいです。</InterviewAnswer>
            <InterviewAnswer interviewee='種村'>すでにアドバイスはいただいているのですが、今後サービスの規模が拡大していきメンバーが増えていったタイミングで、こういうところを強めていったほうがいいとか、こういうところに人を入れたほうがいいなど、人員計画を含めたアドバイスをいただけると嬉しいです。</InterviewAnswer>
          </div>
          <InterviewQuestion>ご協力、ありがとうございました。</InterviewQuestion>
        </Container>
      </Article>
    </Layout>
  )
}

export default Page

export function Head() {
  return (
    <MetaTags
      title='お客様インタビュー 株式会社Vook様 | 株式会社スマートアルゴリズム'
      description='株式会社Vook 取締役の阿部様とWebデザイナーの種村様にご協力いただきました。'
      image={TopImage}
    >
    </MetaTags>
  )
}
