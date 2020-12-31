import React from "react"

import Header from "./header"
import Footer from "./footer"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header
      title="Flashover"
      subtitle="Blog posts about the technical and non-technical work in the software industry"
    />
    <main className="container mx-auto -mt-24 sm:-mt-36">{children}</main>
    <Footer />
  </>
)

export default Layout
