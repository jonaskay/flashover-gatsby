import React from "react"

import Layout from "./layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import CTASection from "../components/cta-section"

type PostLayoutProps = {
  children: React.ReactNode
  description: string
  path: string
  title: string
}

const PostLayout: React.FC<PostLayoutProps> = ({
  children,
  description,
  path,
  title,
}) => (
  <Layout>
    <SEO title={title} description={description} path={path} type="article" />
    <div className="bg-white">
      <Navbar />
    </div>
    {children}
    <CTASection />
  </Layout>
)

export default PostLayout
