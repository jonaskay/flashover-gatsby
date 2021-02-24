import React from "react"
import { graphql, PageProps } from "gatsby"

import PostLayout from "../layouts/post"
import Article from "../components/article/article"
import TableOfContents, {
  TableOfContentsData,
} from "../components/table-of-contents/table-of-contents"
import routes from "../common/routes"
import MDX from "../components/mdx/mdx"

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
    <PostLayout title={title} description={description} path={slug}>
      <Article>
        <Article.Header
          breadcrumbs={[
            { text: "Flashover", to: routes.ROOT },
            { text: shortTitle },
          ]}
          date={date}
          timeToRead={timeToRead}
          path={slug}
          title={title}
        />
        <Article.Content>
          <TableOfContents data={tableOfContents} />
          <MDX>{body}</MDX>
        </Article.Content>
      </Article>
    </PostLayout>
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
