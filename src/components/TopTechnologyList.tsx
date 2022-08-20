import React from 'react'
import ElasticSvg from '../images/devicon/elastic-wordmark.svg'

const TopTechnologyList = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-8 justify-items-center items-center'>
      <i className='devicon-ruby-plain-wordmark colored text-8xl'></i>
      <i className='devicon-rails-plain-wordmark colored text-8xl'></i>
      <i className='devicon-elixir-plain-wordmark colored text-8xl'></i>
      <i className='devicon-phoenix-plain-wordmark colored text-8xl'></i>
      <i className='devicon-nodejs-plain-wordmark colored text-8xl'></i>
      <i className='devicon-typescript-plain colored text-8xl'></i>
      <i className='devicon-react-plain-wordmark colored text-8xl'></i>
      <i className='devicon-vuejs-plain-wordmark colored text-8xl'></i>
      <i className='devicon-mysql-plain-wordmark colored text-8xl'></i>
      <i className='devicon-postgresql-plain-wordmark colored text-8xl'></i>
      <i className='devicon-redis-plain-wordmark colored text-6xl align-bottom'></i>
      <img className='w-full h-full' src={ElasticSvg} />
      <i className='devicon-amazonwebservices-plain-wordmark colored text-8xl'></i>
      <i className='devicon-googlecloud-plain-wordmark colored text-8xl'></i>
      <i className='devicon-terraform-plain-wordmark colored text-8xl'></i>
      <i className='devicon-kubernetes-plain-wordmark colored text-8xl'></i>
    </div>
  )
}

export default TopTechnologyList
