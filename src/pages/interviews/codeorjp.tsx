import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import Article from '../../components/Article'
import InterviewTop from '../../components/InterviewTop'
import TopImage from '../../images/interview/codeorjp/top.jpg'
import Container from '../../components/Container'
import ExternalLink from '../../components/ExternalLink'
import InterviewQuestion from '../../components/InterviewQuestion'
import InterviewAnswer from '../../components/InterviewAnswer'

const Page = () => {
  return (
    <Layout>
      <InterviewTop companyName='NPO法人みんなのコード' image={TopImage} />
      <Article>
        <Container>
          <div className='mb-8'><ExternalLink href='https://code.or.jp'>NPO法人みんなのコード</ExternalLink> 代表理事の利根川様とCTOの田中様にご協力いただきました。<br />(2019年12月10日)</div>
          <div className='mb-8'>
            <InterviewQuestion>みんなのコード様はどんな事業を行っていますか？</InterviewQuestion>
            <InterviewAnswer interviewee='利根川様(以下、敬称略)'>
              みんなのコードはNPO法人でして、NPO法人はボランティア団体が多いんですが、私たちはプロとして仕事として生業として活動しています。弊法人では「すべての子供がプログラミングを楽しむ国にする」というミッションを掲げて活動しています。<br />
              すべての子供と言っても、小学生だけで650万人、小中高合わせて1,200〜1,300万人ほどいます。そことどう繋がっていくかを考えたときに、学校というプラットフォームを活用と思いまして、みんなのコードが学校の先生をサポートし、学校の先生が授業で子供たちに教えることでプログラミング教育を届けるということをやっています。<br />
              具体的にどう学校教育をサポートしているのかというと、大きく2つアプローチがあって、まずひとつがテクノロジーのアプローチ、すなわち教室で使いやすい教材を開発することです。もうひとつが、クラウドの上に良いソフトウェアがあるから使ってもらえるというほど単純にいかないのが学校教育の特徴なので、元校長先生などの教育関係者を3名雇って、全国の教育委員会と共同して先生向けのセミナーなどを行い、実際に先生方に教材を使っていただき、また先生方から鋭いご意見をいただいて、教材に反映したりしています。<br />
              ただ、それだけだと活動の原資が足りないので、2つのアプローチを実現するためにいろいろな企業様から資金面・人材面などご支援いただいていて、最近だとGoogleさんに大きなサポートしていただいたり、個人の方にクラウドファンディングもお願いしたりして活動しています。
            </InterviewAnswer>
          </div>
          <div className='mb-8'>
            <InterviewQuestion>お2人は社内でどんな立場でしょうか？</InterviewQuestion>
            <InterviewAnswer interviewee='田中様(以下、敬称略)'>
              肩書きとしてはCTOなので、技術面では最終的には責任をとる立場です。弊法人のエンジニアの主な仕事は教材の開発で、僕はマネジメントやプロジェクトリーダーとしてプロジェクトを進めたり、お客様とやりとりしたりしています。あとは定期的にエンジニアと面談したり、実際にコードを書いたり、なんでもやれることはやります。<br />
              CTOっぽくないところで言うと、社内の間に立って各部署を超えた人と人のやりとり、こういう意見があるよとか利根川さんはこういう風に考えてるよとか、ちょっとCOOっぽいところで人のマネジメントもやったりしています。
            </InterviewAnswer>
            <InterviewAnswer interviewee='利根川'>
              社内での役割で本当はやらなければいけないけどあまりできていないのが、ビジョンを示すことやリーダーシップをとることです。ただ、ビジョンだけを示せば人が動くのかというとそういうわけではないので、チームで動けるように苦手ながら工夫してやっているというのが正直なところです。<br />
              私より優れた面をもった多様な強みを持ったチームなので、メンバー一人ひとりがちゃんと動く事で成果を最大化しようと工夫しています。弊法人のバリューにも多様性を強みにするということを掲げていて、あの人の強いところとこの人の強いところを組み合わせることでもっと強い事ができるというのがチームプレイとして大事だと思っているので、試行錯誤しながらやっています。
            </InterviewAnswer>
          </div>
          <div className='mb-8'>
            <InterviewQuestion>弊社にどんな仕事を依頼していますか？</InterviewQuestion>
            <InterviewAnswer interviewee='田中'>
              結構色々ありますが、AmazonPayの寄付の仕組みの実装だったり、中学校向け教材の開発の面で技術顧問という立ち位置でアドバイスをお願いしていて、定例会議でご質問いただいたり、具体的な作業としてはインフラの設計や構築もお願いしています。<br />
              また、プログルで使っているBlocklyというライブラリの自動テスト基盤を作っていただいていて、テストも書けるようになり大変助かっています。
            </InterviewAnswer>
            <InterviewAnswer interviewee='利根川'>加えて、理科の教材で新しいコースを提供するにあたり、既存のオープンソースソフトウェア(MakeCode)の挙動などの込み入ったところも見ていただいています。</InterviewAnswer>
          </div>
          <div className='mb-8'>
            <InterviewQuestion>弊社に依頼して良かったと思うことはありますか？</InterviewQuestion>
            <div className='flex flex-row-reverse gap-4'>
              <div className='flex-[2]'>
                <InterviewAnswer interviewee='田中'>
                  全部ですね(笑)。我々ではもうこれ以上見きれないという部分を解きほぐして見つけてくれるのが大変助かります。<br />
                  プログルで使っているBlocklyのテストがまさか書けるようになると思わなかったですし、他では誰もやっていないと思うので、もしかしたら世界で唯一、日本では唯一かもしれません。あとは理科で使っているMakeCodeの中を解きほぐしていただいて、ここまで対応できるのかと驚いています。<br />
                  また、インフラのことも含め、スマートアルゴリズムさんが提案してくださることなら間違いないという安心感があります。
                </InterviewAnswer>
              </div>
              <figure className='flex-1'>
                <StaticImage src='../../images/interview/codeorjp/image.jpg' alt='' width={336} className='w-full mb-2' />
                <figcaption className='text-center text-sm'>代表理事の利根川様(写真左)、CTOの田中様(写真右)</figcaption>
              </figure>
            </div>
          </div>
          <div className='mb-8'>
            <InterviewQuestion>みんなのコード様の今後の展望、またそこにあたって弊社に期待していることをお聞かせください。</InterviewQuestion>
            <InterviewAnswer interviewee='利根川'>学校教育は、変わるのに残念ながらかなりの時間がかかります。私たちは今、小学校や中学校向けの教材を提供していて、変わっていくという手応えはあるんですが、まだまだ我々が着手できているのは氷山の一角、ほんの一部なので、これから日本の教育を変えていくという中で、テクノロジーのアプローチにおいて引き続きお力添えいただきたいと思っています。これからも長く、大きな課題に一緒に取り組んでいきたいです。</InterviewAnswer>
            <InterviewAnswer interviewee='田中'>小学校は来年必修になるのでプログルがたくさん使われていくと思うんですが、プロダクトしては0-1のタイミングは終えていて、1-10、10-100、100-1,000と伸ばしてタイミングになっていく中で技術的な負債が溜まっていくので、安定的なプロダクトにするための基盤づくりをお願いしていきたいです。また、今後も中学校の教材をはじめ新しい教材を作っていくので、引き続き運用や改善、設計から開発までお力添えいただきたいと思います。</InterviewAnswer>
          </div>
          <InterviewQuestion>ご協力、ありがとうございました。</InterviewQuestion>
        </Container>
      </Article>
    </Layout>
  )
}

export default Page
