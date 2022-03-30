import React from 'react'

const InterviewQuestion: React.FC = ({ children }) => {
  return (
    <p className='before:content-["―"] before:mr-4 mb-4'>
      {children}
    </p>
  )
}

export default InterviewQuestion
