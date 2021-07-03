import { graphql, navigate } from "gatsby"
import {portfolio, projects, side} from "../../styles/projects.module.css"

import Layout from "../../components/layout"
import ProjectDetails from '../../templates/site-template'
import React from "react"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

const Projects = ({ data }) => {
  deckDeckGoHighlightElement()
  const docs = data.projects.nodes

  const [selectedDoc, setSelectedDoc] = React.useState(data.projects.nodes[0].html)
  
    // we need to use useeffect 
    //so we can get to the element after render

   // const nodeList=domRefNode.current.firstChild.childNodes 

    //var entries = nodeList.entries()
   // console.log(entries)
   

    const domRefNode =  React.createRef()
  
    const activeStyles={
      // background:'green',
      // color:'blue'
    }


  const handleClick=(e)=> {
    var link = e.currentTarget.id
    docs.forEach(element => {
      if (element.frontmatter.slug===link) {
      //  navigate('/docs/' +element.frontmatter.slug )
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
                <span style={activeStyles}  id={project.frontmatter.slug} onClick={handleClick}   tabIndex={0}  role="button"  onKeyDown={handleClick} key={project.id}>
                  {project.frontmatter.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div ref={domRefNode} className={projects}>

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
