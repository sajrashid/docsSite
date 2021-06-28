/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-remark-code-repls`,
      options: {
        name: `repls`,
        externals: [
          'https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min.js',
        ],
        dependencies: ['d3'],
        codesandbox: ['react', 'react-dom', 'd3'],
        html: '<div id="root"></div>',
        directory: `${__dirname}/src/examples/`,
        target: '_blank',
         // Provider specific options
    codepen: {
      includeMatchingCSS: false,
    },
    codesandbox: {
    }
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`
          },
        ],
      },
    },
  ],
  siteMetadata: {
    title: 'Web Warrior',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2021 Web Warrior',
    contact: 'me@thewebwarrioruk.co.uk',
  },
}
