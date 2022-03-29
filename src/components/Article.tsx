import React from 'react'

type Props = {
  title?: string
}

const Article: React.FC<Props> = ({ children, title }) => {
  return (
    <article className='min-h-screen pt-16'>
      {title && (
        <div className='text-center mb-6'>
          <h1 className='bg-base-200 text-2xl py-8'>{title}</h1>
        </div>
      )}
      {children}
    </article>
  )
}

export default Article
