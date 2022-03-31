import React from 'react'

const Container: React.FC = ({ children }) => {
  return (
    <div className='container mx-auto max-w-5xl px-4'>
      {children}
    </div>
  )
}

export default Container
