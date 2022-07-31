import React from 'react'

type Props = HasChildrenProps & {
  interviewee: string
}

const InterviewAnswer: React.FC<Props> = ({ children, interviewee }) => {
  return (
    <p className='mb-2 leading-8'>
      <span className='font-bold mr-4'>{interviewee}</span>
      {children}
    </p>
  )
}

export default InterviewAnswer
