import React from 'react'

type Props = {
  interviewee: string
}

const InterviewAnswer: React.FC<Props> = ({ children, interviewee }) => {
  return (
    <p className='mb-2'>
      <span className='font-bold mr-4'>{interviewee}</span>
      {children}
    </p>
  )
}

export default InterviewAnswer
