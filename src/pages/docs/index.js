import React, {useState} from "react"
import {portfolio, projects, side} from "../../styles/projects.module.css"

import Layout from "../../components/layout"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { graphql } from "gatsby"

const Projects = ({ data }) => {
  deckDeckGoHighlightElement()
  const docs = data.projects.nodes

  const [selectedDoc, setSelectedDoc] = useState(data.projects.nodes[0].html)
  
  function handleClick(e) {
   
    var link = e.currentTarget.id
    docs.forEach(element => {
      if (element.frontmatter.slug===link) {
        setSelectedDoc(element.html)
      }
    });
    
  }


  return (
    <Layout>
      <div className={portfolio}>
        <div className={side}>
          <ul>
            {docs.map(project => (
              <li key={"li" + project.id}>
                <span id={project.frontmatter.slug} onClick={handleClick}   tabIndex={0}  role="button"  onKeyDown={handleClick} key={project.id}>
                  {project.frontmatter.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={projects}>

        <div dangerouslySetInnerHTML={{__html:selectedDoc}} />;
        </div>
      </div>
    </Layout>
  )
}

export default Projects

// export page query
export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        slug
        stack
        title
      }
      id
      html
    }
  }
}
`
