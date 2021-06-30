import { Link, graphql } from "gatsby"

import Helmet from "react-helmet"
import Layout from "../../src/components/layout"
import React from "react"
import Table from 'react-dj-table'
import robots from '../robots.json'
import styles from "../styles/home.module.css"

export default function Home({ data }) {

  const options = {
    iconCols: [{ 'email': '<i class="envelope icon"></i>Email' }],
    customCols: [{ 'Avatar': '<div style="min-height:6em"><img  decoding="async" src=${Avatar}></img></div' }],
    pageable: true,
    filters: true,
    tableCss:'ui fixed table',
    searchInputCss: 'searchInputCss',
    pagerCss:'pager',
  }

  return (
    <Layout>
      <Helmet>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css"/>
      </Helmet>

      <section className={styles.header}>
        <div>
          <h2>React Dynamic JSON Table
          </h2>
          <small>Responsive standard HTML table</small>
      <div >
      </div>
        <p>Tailwind, Bootstrap, Sematic UI examples</p>
          <Link className={styles.btn} to="/docs">
            Live Examples
          </Link>
        <div className="tablecss">
        <Table json={robots} options={options} />
         <small>"Robots lovingly delivered by Robohash.org" or something.</small>
        </div>

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
