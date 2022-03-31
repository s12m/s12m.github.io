import React from 'react'
import { PageProps, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Article from '../components/Article'
import Container from '../components/Container'
import News from '../components/News'

const Page: React.FC<PageProps<GatsbyTypes.AllNewsYamlQuery>> = ({ data }) => {
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
