import React from "react"

import Layout from "./layout"
import Navbar from "../components/navbar"
import Hero from "../components/hero"

type LandingLayoutProps = {
  children: React.ReactNode
  subtitle?: React.ReactNode
  title: React.ReactNode
}

const LandingLayout: React.FC<LandingLayoutProps> = ({
  children,
  subtitle,
  title,
}) => (
  <Layout>
    <div className="bg-white">
      <Navbar />
      <Hero
        title={title}
        subtitle={subtitle}
        background="bg-white"
        size="large"
      />
    </div>
    {children}
  </Layout>
)

export default LandingLayout
