import "../styles/global.css"

import Navbar from "./navbar"
import React from "react"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className='forkme'>
      <a href="https://github.com/sajrashid/React-Dynamic-Json-Table"><img loading="lazy" width="149" height="149" 
      src="https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149" 
      class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1"/></a>
      </div>
      <div className="content">{children}</div>
      <footer>
        <p> copyright </p>
      </footer>
    </div>
  )
}
