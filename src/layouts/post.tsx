import React from "react"

import { BreadcrumbItems } from "../components/breadcrumbs"
import Layout from "./layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Article from "../components/article/article"
import CTASection from "../components/cta-section"

type PostLayoutProps = {
  body: string
  breadcrumbs: BreadcrumbItems
  children?: React.ReactNode
  date: string
  tableOfContents: TableOfContentsData
  timeToRead: number
  description: string
  path: string
  title: string
}

const PostLayout: React.FC<PostLayoutProps> = ({
  body,
  breadcrumbs,
  children,
  date,
  description,
  path,
  tableOfContents,
  timeToRead,
  title,
}) => (
  <Layout>
    <SEO title={title} description={description} path={path} type="article" />
    <div className="bg-white">
      <Navbar />
    </div>
    <Article>
      <Article.Header
        breadcrumbs={breadcrumbs}
        date={date}
        timeToRead={timeToRead}
        path={path}
        title={title}
      />
      <Article.Content tableOfContents={tableOfContents}>
        {body}
      </Article.Content>
    </Article>
    {children}
    <CTASection />
  </Layout>
)

export default PostLayout
