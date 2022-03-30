import React from 'react'

type Props = {
  href: string
}

const ExternalLink: React.FC<Props> = ({ children, href }) => {
  return (
    <a href={href} target='_blank' className='text-s12m-blue hover:underline'>
      {children}
    </a>
  )
}

export default ExternalLink
