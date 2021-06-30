import Layout from "../../src/components/layout"
import React from "react"
import styles from "../styles/project-details.module.css"

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <Layout>
      <div className={styles.details}>
        <div 
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
