import React from 'react'

const InquiryLink: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <a href='mailto:contact@smartalgorithm.co.jp' className='btn justify-start bg-s12m-red border-s12m-red text-s12m-gray'>
      {children}
    </a>
  )
}

export default InquiryLink
