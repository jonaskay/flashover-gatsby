import React from "react"

import Navbar from "./navbar"
import Footer from "./footer"

type LayoutProps = {
  children: React.ReactNode
  className?: string
  header?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, className, header }) => (
  <div className={className}>
    {header || <Navbar />}
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
