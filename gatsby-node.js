const path = require(`path`)

const siteTemplate=path.resolve('src/templates/site-template.js')
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': path.resolve(__dirname, 'src/components'),
        '~images': path.resolve(__dirname, 'src/images'),
      },
    }
  });

  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            path
            type
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/docs/'+ node.frontmatter.slug,
      component: path.resolve('./src/templates/site-template.js'),
      context: { slug: node.frontmatter.slug }
    })
  })

  // https://github.com/gatsbyjs/gatsby/issues/17661
 

}