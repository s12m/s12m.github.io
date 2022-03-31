import React from 'react'
import { ExternalLinkIcon } from '@heroicons/react/outline'

type Props = {
  href: string
}

const ExternalLink: React.FC<Props> = ({ children, href }) => {
  return (
    <a href={href} target='_blank' className='hover:underline'>
      {children}<ExternalLinkIcon className='inline ml-1' width={16} />
    </a>
  )
}

export default ExternalLink
