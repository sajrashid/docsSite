import Layout from "../../src/components/layout"
import React from "react"
import {details} from "../styles/project-details.module.css"
import { graphql } from 'gatsby'

const ProjectDetails = ({ data }) => {
  const { htmlMarkdown } = data.markdownRemark

  return (
    <Layout>
      {/* <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt || 'nothin’'}
      image={post.frontmatter.image.childImageSharp.sizes.src}
      pathname={post.fields.slug}
      article
    /> */}
      <div className={details}>
        <div 
         
          dangerouslySetInnerHTML={{ __html: htmlMarkdown }}
        />
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
query ProjectDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
    }
  }
}`

