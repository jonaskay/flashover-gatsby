import React from "react"
import { Link } from "gatsby"

import Container from "./container"
import PaginationLink from "./pagination-link"

type PaginationProps = {
  basePath: string
  currentPage: number
  pageCount: number
}

const Pagination: React.FC<PaginationProps> = ({
  basePath,
  currentPage,
  pageCount,
}) => {
  const pagePath = (pageNumber: number): string => {
    if (pageNumber === 1) {
      return basePath
    }

    return `${basePath}/page/${pageNumber}`
  }

  return (
    <nav aria-label="page navigation">
      <Container className="my-8 sm:my-16 text-center text-lg">
        {currentPage > 1 && (
          <PaginationLink to={pagePath(currentPage - 1)} direction="prev" />
        )}
        {new Array(pageCount).fill(undefined).map((_, index) => {
          const pageNumber = index + 1

          return (
            <Link
              key={pageNumber}
              to={pagePath(pageNumber)}
              className="inline-block align-middle px-2 w-7 text-indigo-600 hover:underline"
              activeClassName="active"
            >
              {pageNumber}
            </Link>
          )
        })}
        {pageCount > currentPage && (
          <PaginationLink to={pagePath(currentPage + 1)} direction="next" />
        )}
      </Container>
    </nav>
  )
}

export default Pagination
