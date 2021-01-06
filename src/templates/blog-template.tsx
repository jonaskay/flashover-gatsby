import React from "react"
import { graphql, PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"
import PostHeader from "../components/post-header"
import PostBody from "../components/post-body"
import CTASection from "../components/cta-section"

type DataProps = {
  mdx: {
    body: string
    fields: {
      route: string
    }
    frontmatter: {
      date: string
      title: string
    }
  }
}

const BlogTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
  const {
    mdx: {
      body,
      fields: { route },
      frontmatter: { title, date },
    },
  } = data

  return (
    <Layout>
      <Article>
        <PostHeader date={date} route={route} title={title} />
        <PostBody>{body}</PostBody>
      </Article>
      <CTASection />
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query($route: String!) {
    mdx(fields: { route: { eq: $route } }) {
      body
      fields {
        route
      }
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`
