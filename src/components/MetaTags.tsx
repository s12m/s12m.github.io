import React from 'react'

const BASE_URL = 'https://smartalgorithm.co.jp'
const DEFAULT_DESCRIPTION = '問題の本質を見抜き、ITの原理原則を理解した上で最適な解のために使いこなせる技術者こそ、ビジネス課題の根本的かつ迅速な解決に必要です。'

type Props = HasChildrenProps & {
  pathname: string
  title: string
  description?: string
  image?: string
}

const MetaTags: React.FC<Props> = ({ pathname, title, description, image, children }) => {
  description ??= DEFAULT_DESCRIPTION

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={`${BASE_URL}${pathname}`} />
      {image && (
        <meta name="og:image" content={`${BASE_URL}${image}`} />
      )}
      <meta name="og:description" content={description} />
      {children}
    </>
  )
}

export default MetaTags
