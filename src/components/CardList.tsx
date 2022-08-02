import React from 'react'

const CardList: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <div className='flex gap-6'>{children}</div>
  )
}

export default CardList
