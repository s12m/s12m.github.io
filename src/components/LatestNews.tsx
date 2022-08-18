import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import News from './News'

const LatestNews = () => {
  const data = useStaticQuery<Queries.LatestNewsYamlQuery>(graphql`
    query LatestNewsYaml {
      allNewsYaml(limit: 5) {
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
  `)

  return <News data={data} />
}

export default LatestNews
