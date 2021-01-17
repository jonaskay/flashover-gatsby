import React from "react"
import { graphql, PageProps } from "gatsby"

import SiteLayout from "../layouts/site"
import Container from "../components/container"
import BlogPostCard from "../components/blog-post-card"
import Pagination from "../components/pagination"
import routes from "../common/routes"

type DataProps = {
  allFile: {
    edges: {
      node: {
        childMdx: {
          id: string
          fields: {
            slug: string
          }
          frontmatter: {
            date: string
            description: string
            title: string
          }
        }
      }
    }[]
  }
}

type PageContextProps = {
  currentPage: number
  limit: number
  pageCount: number
  pathname: string
  skip: number
}

const ArchiveTemplate: React.FC<PageProps<DataProps, PageContextProps>> = ({
  data,
  pageContext,
}) => {
  const {
    allFile: { edges },
  } = data

  const { currentPage, pageCount, pathname } = pageContext

  return (
    <SiteLayout
      path={pathname}
      title="Archive"
      subtitle="Collection of weekly blog posts written between 2018 and 2020"
    >
      <Container className="my-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {edges.map(({ node }) => {
          const mdx = node.childMdx

          return <BlogPostCard key={mdx.id} data={mdx} />
        })}
      </Container>
      <Pagination
        basePath={routes.archive}
        currentPage={currentPage}
        pageCount={pageCount}
      />
    </SiteLayout>
  )
}

export default ArchiveTemplate

export const query = graphql`
  query($skip: Int = 0, $limit: Int = 18) {
    allFile(
      filter: { sourceInstanceName: { eq: "archive" } }
      sort: { fields: [name], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          childMdx {
            id
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              description
              title
            }
          }
        }
      }
    }
  }
`