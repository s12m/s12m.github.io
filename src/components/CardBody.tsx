import React from 'react'

const CardBody: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <div className='card-body'>{children}</div>
  )
}

export default CardBody
