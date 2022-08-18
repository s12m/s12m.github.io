import React from 'react'

const CardList: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <div className='flex flex-col md:flex-row gap-6'>{children}</div>
  )
}

export default CardList
