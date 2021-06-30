import '../styles/navbar.css'

import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  
  return (
    <nav className="topnav">
      <div className="toptitle">
        <h4>Documentation & Examples</h4>
        <h6>React Dynamic Json Table</h6>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/api">API</Link>
        <Link to="/docs">Examples & Doc's</Link>
      </div>
    </nav>
  )
}
