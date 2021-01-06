import { Link } from "gatsby"
import React from "react"

import Container from "./container"

type PostHeaderProps = {
  breadcrumbs?: { text: string; to: string }[]
  date
  title
  route
}

const PostHeader: React.FC<PostHeaderProps> = ({
  breadcrumbs,
  date,
  title,
  route,
}) => (
  <header className="border-t bg-gray-100">
    <Container className="max-w-2xl py-8">
      {breadcrumbs && (
        <nav className="mb-2 text-center text-lg">
          {breadcrumbs.map(breadcrumb => (
            <span key={breadcrumb.to}>
              <Link className="text-indigo-600" to={breadcrumb.to}>
                {breadcrumb.text}
              </Link>
              <span className="mx-2 text-gray-500">&gt;</span>
            </span>
          ))}
        </nav>
      )}
      <h1 className="sm:mt-4 mb-8 text-center text-4xl sm:text-5xl text-indigo-600 font-semibold">
        <Link to={route}>{title}</Link>
      </h1>
      <div className="text-lg">
        <Link to={route} className="text-lg text-indigo-600">
          Link to post
        </Link>
        <div className="float-right text-gray-700">{date}</div>
      </div>
    </Container>
  </header>
)

export default PostHeader
