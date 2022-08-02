import React from 'react'

const CardTitle: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <h3 className='card-title text-s12m-blue'>{children}</h3>
  )
}

export default CardTitle
