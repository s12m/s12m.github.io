import React from 'react'

const Container: React.FC = ({ children }) => {
  return (
    <div className='container mx-auto max-w-6xl'>
      {children}
    </div>
  )
}

export default Container
