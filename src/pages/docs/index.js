import { Link, graphql, navigate } from "gatsby"
import React, {useState} from "react"

import Layout from "../../components/layout"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import styles from "../../styles/projects.module.css"

const Projects = ({ data }) => {
  deckDeckGoHighlightElement()
  const docs = data.projects.nodes

  const [selectedDoc, setSelectedDoc] = useState(data.projects.nodes[0].html)
  
  function handleClick(e) {
   
    var link = e.currentTarget.id
    //navigate("/docs/" + link)
    docs.forEach(element => {
      if (element.frontmatter.slug===link) {
        setSelectedDoc(element.html)
      }
    });
    
  }


  return (
    <Layout>
      <div className={styles.portfolio}>
        <div className={styles.side}>
          <ul>
            {docs.map(project => (
              <li key={"li" + project.id}>
                <span id={project.frontmatter.slug} onClick={handleClick} key={project.id}>
                  {project.frontmatter.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.projects}>

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
