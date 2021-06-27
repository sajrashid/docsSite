import { Link, graphql } from 'gatsby'

import Img from "gatsby-image"
import Layout from "../components/Layout"
import React from "react"
import styles from '../styles/home.module.css'

export default function Home({ data }) {
  console.log(data)
  
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>React Dynamic JSON Table</h2>

          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/docs">My Portfolio Projects</Link>
        </div>
        {/* <Img    fluid={data.file.childImageSharp.fluid} /> */}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`