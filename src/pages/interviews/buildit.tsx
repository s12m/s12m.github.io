import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import Article from '../../components/Article'
import InterviewTop from '../../components/InterviewTop'
import TopImage from '../../images/interview/buildit/top.jpg'
import Container from '../../components/Container'
import ExternalLink from '../../components/ExternalLink'
import InterviewQuestion from '../../components/InterviewQuestion'
import InterviewAnswer from '../../components/InterviewAnswer'

const Page = () => {
  return (
    <Layout>
      <Article>
        <InterviewTop companyName='株式会社ビルディット' image={TopImage} />
        <Container>
          <div className='mb-8'><ExternalLink href='https://bldt.jp'>株式会社ビルディット</ExternalLink> 代表取締役の富田様にご協力いただきました。<br />(2019年12月2日)</div>
          <div className='mb-8'>
            <InterviewQuestion>ビルディット様はどんな事業を行っていますか？</InterviewQuestion>
            <InterviewAnswer interviewee='富田様(以下、敬称略)'>Webサービスのデザインと開発をやっております。請負でやることがほとんどです。</InterviewAnswer>
          </div>
          <div className='mb-8'>
            <InterviewQuestion>富田さんは社内でどんな立場でしょうか？</InterviewQuestion>
            <InterviewAnswer interviewee='富田'>代表を務めています。個別の案件の引き合いの部分から相談に乗って、プロジェクトをどんな風に進行するか、対応の体制を社内社外含めてチーム構成し、開発プロジェクトを進行します。時にはプレイヤーとして参加します。</InterviewAnswer>
          </div>
          <div className='mb-8'>
            <InterviewQuestion>弊社にどんな仕事を依頼していますか？</InterviewQuestion>
            <InterviewAnswer interviewee='富田'>請負でやっている業務システムの設計と開発を依頼しています。</InterviewAnswer>
          </div>
          <div className='mb-8'>
            <InterviewQuestion>弊社に依頼して良かったと思うことはありますか？</InterviewQuestion>
            <div className='flex flex-row-reverse gap-4'>
              <div className='flex-[2]'>
                <InterviewAnswer interviewee='富田'>色々ありますが、まず組んでいただける幅が広く、こちらが実装仕様まで言及しなくても、むしろこちらが考えるよりもスマートで良い解決策を提案して構築するところまで、まとめて面倒を見てもらえるところがありがたいです。あとはアプリケーションレイヤーだけではなく、コンピューターサイエンスの部分や、実際にシステムを運用する上では気にしないといけないインフラなども造詣が深いので、そこも含めて相談できるところですね。</InterviewAnswer>
              </div>
              <figure className='flex-1'>
                <StaticImage src='../../images/interview/buildit/image.jpg' alt='' width={336} className='w-full mb-2' />
                <figcaption className='text-center text-sm'>代表取締役の富田様</figcaption>
              </figure>
            </div>
          </div>
          <div className='mb-8'>
            <InterviewQuestion>弊社としてもコンピュータサイエンスの理解を大事にしているので、そこを評価していただけるのは光栄です。</InterviewQuestion>
            <InterviewAnswer interviewee='富田'>ましてや開発会社から開発会社への依頼なので、単純な人の補填ではなくて、総合的に信頼できる部分が大きいのでお願いしているというのもあります。</InterviewAnswer>
          </div>
          <div className='mb-8'>
            <InterviewQuestion>ビルディット様の今後の展望、またそこにあたって弊社に期待していることをお聞かせください。</InterviewQuestion>
            <InterviewAnswer interviewee='富田'>開発会社として、まず外部の方にお願いしたいのはプロフェッショナルとしての仕事です。必ずしも社内のメンバーが初めから飛び抜けてプロフェッショナルであるというわけではないので、外部のプロフェッショナルな方と仕事で関わることで、社内に対して良い刺激になるんですよね。できれば社内で強い体制を作っていきたいところですが、外部の方にも協力いただいて良いパフォーマンスを出してもらうと、社内のメンバーの育成に繋がり、それがより社内を強化していけるという良いサイクルが生まれます。<br />もちろん、案件直接のアウトプットは当然期待するところではありますが、それ以上に、しっかりした知見やコンピュータサイエンスの造詣に基づいた提案力と問題解決力などは社内にも根付かせていきたい力の1つではあるので、今後もそういった良い刺激を持ち込んでいただければと思っています。</InterviewAnswer>
          </div>
          <div className='mb-8'>
            <InterviewQuestion>今後の展望はどのようにお考えですか？</InterviewQuestion>
            <InterviewAnswer interviewee='富田'>やっぱり開発会社として強いチームになってきたいですよね。弊社の特徴としては社内にUX/UIデザイナーもいますので、デザインもエンジニアリングもしっかりやっている、というところがあります。デザインもWebページの制作というよりは、Webサービスやアプリデザインなど、エンジニアリングとの連携でよりバリューを出せるところに注力しています。デザインとエンジニアリングの両輪で、色々な事業立ち上げや運用のところでよりお力になれればと思っています。<br />また、もうひとつの特徴として、八王子で開発会社をやっているということがあります。メンバーは近隣在住の者が多く、徒歩や自転車通勤したり、朝の電車通勤も混雑しない方面ということで、通勤に苦労がない分、仕事にも余裕が生まれると思っています。都心にいなくてもそれぞれ離れたところでもチームを作って開発ができることを体現していくというか、みんながみんな満員電車で通って働かなくてもWebサービスづくりの仕事はできるんだよっていうのを、リモートワークなどの方法論も含めて波及していける存在になれるといいなと思います。</InterviewAnswer>
          </div>
          <InterviewQuestion>ご協力、ありがとうございました。</InterviewQuestion>
        </Container>
      </Article>
    </Layout>
  )
}

export default Page
