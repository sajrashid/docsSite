import { Link, graphql } from "gatsby"

import Layout from "../../src/components/layout"
import React from "react"
import styles from "../styles/home.module.css"

export default function Home({ data }) {


  //var json = [{id:0,name:"cat1", isParent: false},{id:1,name:"cat2", isParent: true}]
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>React Dynamic JSON Table
            <small>Responsive standard HTML table</small>
          </h2>

         
          <p>Tailwind, Bootstrap, Sematic UI examples</p>

          <Link className={styles.btn} to="/docs">
            Live Examples
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
