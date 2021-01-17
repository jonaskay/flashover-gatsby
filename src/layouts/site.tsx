import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import routes from "../common/routes"

type SiteLayoutProps = {
  children: React.ReactNode
  description?: string
  path: string
  subtitle?: string
  title: string
}

const SiteLayout: React.FC<SiteLayoutProps> = ({
  children,
  description,
  path,
  subtitle,
  title,
}) => (
  <Layout>
    <SEO title={title} description={description} path={path} />
    <Navbar />
    <div className="bg-white border-b">
      <Hero
        title={
          <Link to={path} className="text-indigo-600 hover:text-indigo-500">
            {title}
          </Link>
        }
        subtitle={subtitle}
        breadcrumbs={[{ text: "Flashover", to: routes.root }, { text: title }]}
        background="bg-gray-100"
      />
      {children}
    </div>
  </Layout>
)

export default SiteLayout
