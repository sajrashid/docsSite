import 'semantic-ui-css/semantic.min.css'

import Layout from '../../src/components/layout'
import { Link } from "gatsby"
import React from 'react'
import Table from 'react-dj-table'
import { header } from '../styles/home.module.css'
import robots from '../robots.json'

export default function Home({ data }) {

  const options = {
    iconCols: [{ email: '<i class="envelope icon"></i>Email' },
    { Avatar: '<i class="id badge icon"></i>Avatar' }],
    customCols: [{ Avatar: '<div style="min-height:5em"><img  decoding="async" src=${Avatar}></img></div' }],
    pageable: true,
    labelCols: [
      { last_name: "LastName" },
      { gender: "Gender" },

    ],
    filters: true,
    pageSize: 5,
    sortable: true,
    selectable: true,
    selectedRowCss: 'rowCss',
    searchInputCss: 'searchInputCss',
    tableCss: 'ui fixed table',
    pagerCss: 'pager',
    dateCols: ['RetiredDate'],
    dateOptions: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  }


  const rowClickHandler = (row) => {
    console.log(row)
  }

  return (
    <Layout>
      <section className={header}>
        <div className="titleContent">
          <h2>React Dynamic JSON Table
          </h2>
          <small>Responsive standard HTML table</small>
          <p>Tailwind, Bootstrap, Sematic UI examples</p>
          <Link to="/docs" >
            <span className="examplesBtn"  tabIndex={0}  role="button">
            Live Examples
            </span>
            
          </Link>
          <div className="rowData">

          </div>
          <div className="tablecss">
            <div className="tabletitle">Responsive table styled with Sematic UI, resize the browser to see the columns collapse</div>
            <Table json={robots} options={options} rowClick={rowClickHandler} />
            <small>"Robots lovingly delivered by Robohash.org" or something.</small>
          </div>
        </div>
      </section>
    </Layout>
  )
}


