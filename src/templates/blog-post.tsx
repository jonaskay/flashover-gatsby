import React from "react"
import { graphql, PageProps } from "gatsby"

import { TableOfContentsData } from "../components/table-of-contents"
import PostLayout from "../layouts/post"
import routes from "../common/routes"

type DataProps = {
  mdx: {
    body: string
    fields: {
      date: string
      slug: string
    }
    frontmatter: {
      description: string
      shortTitle: string
      title: string
    }
    timeToRead: number
    tableOfContents: TableOfContentsData
  }
}

const BlogPostTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
  const {
    mdx: {
      body,
      fields: { slug, date },
      frontmatter: { title, shortTitle, description },
      timeToRead,
      tableOfContents,
    },
  } = data

  return (
    <PostLayout
      title={title}
      description={description}
      date={date}
      timeToRead={timeToRead}
      tableOfContents={tableOfContents}
      body={body}
      path={slug}
      breadcrumbs={[
        { text: "Flashover", to: routes.ROOT },
        { text: shortTitle },
      ]}
    />
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      ...BlogPost
      body
      frontmatter {
        shortTitle
      }
      tableOfContents(maxDepth: 3)
    }
  }
`
