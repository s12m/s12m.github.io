import React from 'react'

const Container: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <div className='container mx-auto max-w-6xl px-4 xl:px-0'>
      {children}
    </div>
  )
}

export default Container
