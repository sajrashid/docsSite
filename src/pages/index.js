import Helmet from 'react-helmet'
import Layout from '../../src/components/layout'
import { Link } from "gatsby"
import React from 'react'
import Table from 'react-dj-table'
import {header} from '../styles/home.module.css'
import robots from '../robots.json'

export default function Home({ data }) {

  const options = {
    iconCols: [{ 'email': '<i class="envelope icon"></i>Email' }],
    customCols: [{ 'Avatar': '<div style="min-height:5em"><img  decoding="async" src=${Avatar}></img></div' }],
    pageable: true,
    filters: true,
    tableCss: 'ui fixed table',
    searchInputCss: 'searchInputCss',
    pagerCss: 'pager',
  }

  return (
    <Layout>
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css" />
      </Helmet>

      <section className={header}>
        <div className="titleContent">
          <h2>React Dynamic JSON Table
          </h2>
          <small>Responsive standard HTML table</small>
          <p>Tailwind, Bootstrap, Sematic UI examples</p>
          <Link  to="/docs">
            Live Examples
          </Link>
          <div className="tablecss">
            <div className="tabletitle">Responsive table styled with Sematic UI, resize the browser to see the columns collapse</div>
            <Table json={robots} options={options} />
            <small>"Robots lovingly delivered by Robohash.org" or something.</small>
          </div>
        </div>
      </section>
    </Layout>
  )
}


