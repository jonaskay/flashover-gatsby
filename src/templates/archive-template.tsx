import React from "react"
import { graphql, Link, PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import Container from "../components/container"
import BlogPostCard from "../components/blog-post-card"
import Pagination from "../components/pagination"

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

const ArchiveIndexTemplate: React.FC<
  PageProps<DataProps, PageContextProps>
> = ({ data, pageContext }) => {
  const {
    allFile: { edges },
  } = data

  const { currentPage, pageCount, pathname } = pageContext

  return (
    <Layout>
      <SEO
        title="Archive"
        description="Full archive of the weekly Flashover blog posts written between 2018 and 2020"
        pathname={pathname}
      />
      <div className="bg-white border-b">
        <PageHeader
          title="Archive"
          subtitle="Collection of weekly blog posts written between 2018 and 2020"
        />
        <Container className="my-8 sm:my-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {edges.map(({ node }) => {
            const mdx = node.childMdx

            return <BlogPostCard key={mdx.id} data={mdx} />
          })}
        </Container>
        <Pagination
          basePath="/archive"
          currentPage={currentPage}
          pageCount={pageCount}
        />
      </div>
    </Layout>
  )
}

export default ArchiveIndexTemplate

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
