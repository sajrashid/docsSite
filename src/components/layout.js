import "../styles/global.css"

import Navbar from "./navbar"
import React from "react"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p> copyright </p>
      </footer>
    </div>
  )
}
