import React from "react"
import { graphql, PageProps } from "gatsby"

import PostLayout from "../layouts/post"
import Navbar from "../components/navbar"
import Article from "../components/article/article"
import CTASection from "../components/cta-section"
import routes from "../common/routes"

type DataProps = {
  mdx: {
    body: string
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      description: string
      shortTitle: string
      title: string
    }
  }
}

const BlogPostTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
  const {
    mdx: {
      body,
      fields: { slug },
      frontmatter: { title, shortTitle, description, date },
    },
  } = data

  return (
    <PostLayout
      title={title}
      description={description}
      date={date}
      body={body}
      path={slug}
      breadcrumbs={[
        { text: "Flashover", to: routes.root },
        { text: shortTitle },
      ]}
    />
  )
}

export default BlogPostTemplate

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
        shortTitle
        title
      }
    }
  }
`
