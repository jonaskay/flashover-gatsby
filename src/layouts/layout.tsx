import React from "react"

import Footer from "../components/footer"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
