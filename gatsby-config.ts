import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'new',
    siteUrl: 'https://www.yourdomain.tld'
  },
  plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-image', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sitemap', {
    resolve: 'gatsby-plugin-manifest',
    options: {
      'icon': 'src/images/logo/cube.png'
    }
  }, 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-source-filesystem',
    options: {
      'name': 'images',
      'path': './src/images/'
    },
  }, 'gatsby-transformer-yaml', {
    resolve: 'gatsby-source-filesystem',
    options: {
      'name': 'data',
      'path': './src/data/'
    },
  }]
}

export default config
