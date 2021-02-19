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
            date: string
            slug: string
          }
          frontmatter: {
            description: string
            title: string
          }
          timeToRead
        }
      }
    }[]
  }
}

type PageContextProps = {
  currentIndex: number
  limit: number
  pageCount: number
  slug: string
  skip: number
}

const ArchiveTemplate: React.FC<PageProps<DataProps, PageContextProps>> = ({
  data,
  pageContext,
}) => {
  const {
    allFile: { edges },
  } = data

  const { currentIndex, pageCount, slug } = pageContext

  return (
    <SiteLayout
      path={slug}
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
        basePath={routes.ARCHIVE}
        currentIndex={currentIndex}
        pageCount={pageCount}
      />
    </SiteLayout>
  )
}

export default ArchiveTemplate

export const query = graphql`
  query($skip: Int = 0, $limit: Int = 18) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "archive" }
        internal: { mediaType: { eq: "text/mdx" } }
      }
      sort: { fields: [name], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          childMdx {
            ...BlogPost
          }
        }
      }
    }
  }
`
