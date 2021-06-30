const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
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
  exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
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
  };

}