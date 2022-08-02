import React from 'react'

const Card: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <div className='card w-full bg-base-100 shadow-md'>{children}</div>
  )
}

export default Card
