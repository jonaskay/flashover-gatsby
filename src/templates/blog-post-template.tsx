import React from "react"
import { graphql, PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/article/article"
import CTASection from "../components/cta-section"

type DataProps = {
  mdx: {
    body: string
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

const BlogTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
  const {
    mdx: {
      body,
      fields: { slug },
      frontmatter: { title, description, date },
    },
  } = data

  return (
    <Layout>
      <SEO title={title} description={description} pathname={slug} article />
      <Article>
        <Article.Header date={date} slug={slug} title={title} />
        <Article.Content>{body}</Article.Content>
      </Article>
      <CTASection />
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
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
`
