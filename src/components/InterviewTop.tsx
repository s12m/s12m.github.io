import React from 'react'

type Props = {
  companyName: string
  image: string
}

const InterviewTop: React.FC<Props> = ({ companyName, image }) => {
  return (
    <section className='h-[80vh] bg-fixed bg-center bg-cover mb-8' style={{backgroundImage: `url(${image})`}}>
      <div className='flex items-center justify-center w-full h-full bg-[#0008]'>
        <h1 className='text-center text-3xl text-s12m-gray'>
          お客様インタビュー
          <div className='divider border-s12m-gray' />
          {companyName} 様
        </h1>
      </div>
    </section>
  )
}

export default InterviewTop
