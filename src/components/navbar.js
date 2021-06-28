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
      <div className="toptitle">
        <h4>Documentation & Examples</h4>
        <h6>React Dynamic Json Table</h6>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/docs">Docs</Link>
      </div>
    </nav>
  )
}
