import '../styles/navbar.css'

import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  // const data = useStaticQuery(graphql`
  //   {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  // const { title } = data.site.siteMetadata

  return (
    <nav className="topnav">
      <h2>Doc's and demo site</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/docs">Docs</Link>
      </div>
    </nav>
  )
}
