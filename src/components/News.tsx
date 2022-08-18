import React from 'react'
import ExternalLink from './ExternalLink'

type Props = {
  data: GatsbyTypes.AllNewsYamlQuery
}

const News: React.FC<Props> = ({ data }) => {
  const news = data.allNewsYaml.edges.map(edge => edge.node)

  return (
    <div>
      {news.map(({ title, category, url, date }, i) => (
        <div key={url}>
          <div className='md:flex'>
            <span className='min-w-[8em] mr-2 text-center'>{date}</span>
            <span className='min-w-[6em] mr-2 text-center'><span className='badge badge-outline'>{category}</span></span>
            <div><ExternalLink href={url!}>{title}</ExternalLink></div>
          </div>
          {i < news.length - 1 && <div className='divider' />}
        </div>
      ))}
    </div>
  )
}

export default News
