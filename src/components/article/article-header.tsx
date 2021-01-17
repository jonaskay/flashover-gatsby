import { Link } from "gatsby"
import React from "react"
import Breadcrumbs, { BreadcrumbItems } from "../breadcrumbs"

import Container from "../container"

export type ArticleHeaderProps = {
  breadcrumbs?: BreadcrumbItems
  date
  title
  slug
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  breadcrumbs,
  date,
  title,
  slug,
}) => (
  <header className="bg-gray-100">
    <Container className="max-w-2xl py-8">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="sm:mt-4 mb-8 text-center text-4xl sm:text-5xl text-indigo-600 font-semibold">
        <Link to={slug}>{title}</Link>
      </h1>
      <div className="text-lg">
        <Link to={slug} className="text-lg text-indigo-600">
          Link to post
        </Link>
        <div className="float-right text-gray-700">{date}</div>
      </div>
    </Container>
  </header>
)

export default ArticleHeader
