import React from "react"
import { graphql, PageProps } from "gatsby"

import PostLayout from "../layouts/post"
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
    timeToRead: number
  }
}

const BlogTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
  const {
    mdx: {
      body,
      fields: { slug },
      frontmatter: { title, shortTitle, description, date },
      timeToRead,
    },
  } = data

  return (
    <PostLayout
      title={title}
      description={description}
      date={date}
      timeToRead={timeToRead}
      body={body}
      path={slug}
      breadcrumbs={[
        { text: "Flashover", to: routes.root },
        { text: shortTitle },
      ]}
    />
  )
}

export default BlogTemplate

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      ...BlogPost
      body
      frontmatter {
        shortTitle
      }
    }
  }
`
