import { Link } from "gatsby"
import React from "react"

import Container from "../container"
import Breadcrumbs, { BreadcrumbItems } from "../breadcrumbs"
import ArticleMeta from "../article-meta"

export type ArticleHeaderProps = {
  breadcrumbs?: BreadcrumbItems
  date: string
  path: string
  timeToRead: number
  title: string
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  breadcrumbs,
  date,
  path,
  timeToRead,
  title,
}) => (
  <header className="bg-gray-100">
    <Container className="max-w-2xl pt-8 pb-4">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="sm:mt-4 mb-8 text-center text-4xl sm:text-5xl font-semibold">
        <Link to={path} className="text-indigo-600 hover:text-indigo-500">
          {title}
        </Link>
      </h1>
      <div className="text-lg">
        <Link to={path} className="-text-lg text-indigo-600">
          Link to post
        </Link>
        <div className="float-right text-gray-600">
          <ArticleMeta date={date} timeToRead={timeToRead} />
        </div>
      </div>
    </Container>
  </header>
)

export default ArticleHeader
