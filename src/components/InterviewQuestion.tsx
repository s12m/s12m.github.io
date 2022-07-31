import React from 'react'

const InterviewQuestion: React.FC<HasChildrenProps> = ({ children }) => {
  return (
    <p className='before:content-["―"] before:mr-4 mb-4'>
      {children}
    </p>
  )
}

export default InterviewQuestion
