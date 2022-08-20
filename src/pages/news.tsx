import React from 'react'
import { HeadProps, PageProps, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Article from '../components/Article'
import Container from '../components/Container'
import News from '../components/News'
import MetaTags from '../components/MetaTags'

const Page: React.FC<PageProps<Queries.AllNewsYamlQuery>> = ({ data }) => {
  return (
    <Layout>
      <Article title='お知らせ'>
        <Container>
          <News data={data} />
        </Container>
      </Article>
    </Layout>
  )
}

export const query = graphql`
  query AllNewsYaml {
    allNewsYaml {
      edges {
        node {
          title
          category
          url
          date(formatString: "YYYY年MM月DD日")
        }
      }
    }
  }
`

export default Page

export function Head({ location }: HeadProps) {
  return (
    <MetaTags
      pathname={location.pathname}
      title='お知らせ | 株式会社スマートアルゴリズム'
    >
    </MetaTags>
  )
}
