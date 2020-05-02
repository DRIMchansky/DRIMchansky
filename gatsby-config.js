var autoprefixer = require('autoprefixer')
var nested = require('postcss-nested')
var properties = require('postcss-custom-properties')
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'DRIMchansky',
    author: 'Nikita Chernov',
    description: 'I make random things in the Web',
    siteUrl: 'https://drimchansky.ru',
    twitter: 'https://twitter.com/DRIMchansky',
    github: 'https://github.com/DRIMchansky',
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        disableAutoprefixing: false,
        disableMinification: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          autoprefixer({
            grid: true,
          }),
          nested(),
          properties({
            preserve: true,
            importFrom: './src/util/properties.css',
          }),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://drimchansky.ru',
        sitemap: 'https://drimchansky.ru/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
  ],
}
