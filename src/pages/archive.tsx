import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import Container from "../components/container"
import BlogPostCard from "../components/blog-post-card"
import SEO from "../components/seo"

type DataProps = {
  posts: {
    edges: {
      node: {
        childMdx: {
          id: string
          fields: {
            route: string
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

const ArchivePage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const {
    posts: { edges },
  } = data

  return (
    <Layout>
      <SEO
        title="Archive"
        description="Full archive of the weekly Flashover blog posts written between 2018 and 2020"
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
      </div>
    </Layout>
  )
}

export default ArchivePage

export const query = graphql`
  {
    posts: allFile(
      filter: { sourceInstanceName: { eq: "archive" } }
      sort: { fields: [name], order: DESC }
    ) {
      edges {
        node {
          childMdx {
            id
            fields {
              route
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
