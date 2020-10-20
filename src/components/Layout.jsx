import React from "react"
import "../styles/Layout.css"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children, location }) {
  return (
    <div>
      <div className="container">
        <Navbar pathname={location.pathname} />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
