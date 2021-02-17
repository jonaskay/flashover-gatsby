import React from "react"
import { graphql, PageProps } from "gatsby"

import { TableOfContentsData } from "../components/table-of-contents"
import PostLayout from "../layouts/post"
import Container from "../components/container"
import SectionHeading from "../components/section-heading"
import BlogPostCard from "../components/blog-post-card"
import Label from "../components/label/label"
import ArrowLeft from "../components/arrow-left"
import ArrowRight from "../components/arrow-right"
import routes from "../common/routes"

type DataProps = {
  post: {
    body: string
    fields: {
      date: string
      slug: string
    }
    frontmatter: {
      description: string
      title: string
    }
    tableOfContents: TableOfContentsData
    timeToRead: number
  }
  next?: {
    fields: {
      date: string
      slug: string
    }
    frontmatter: {
      description: string
      title: string
    }
    timeToRead: number
  }
  previous?: {
    fields: {
      date: string
      slug: string
    }
    frontmatter: {
      description: string
      title: string
    }
    timeToRead: number
  }
}

const ArchivePostTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
  const {
    post: {
      body,
      fields: { slug, date },
      frontmatter: { title, description },
      timeToRead,
      tableOfContents,
    },
    next,
    previous,
  } = data

  const columns = next && previous ? "2" : "1"

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
        { text: "Archive", to: routes.ARCHIVE },
        { text: `&hellip;` },
      ]}
    >
      <div className="bg-white">
        <Container className="max-w-3xl py-8">
          <SectionHeading align="center">Read more weekly posts</SectionHeading>
          <div className={`grid gap-6 grid-cols-1 sm:grid-cols-${columns}`}>
            {previous && (
              <BlogPostCard
                data={previous}
                label={
                  <Label>
                    <Label.Icon>
                      <ArrowLeft />
                    </Label.Icon>
                    <Label.Text>Previous post</Label.Text>
                  </Label>
                }
              />
            )}
            {next && (
              <BlogPostCard
                data={next}
                label={
                  <Label>
                    <Label.Text>Next post</Label.Text>
                    <Label.Icon>
                      <ArrowRight />
                    </Label.Icon>
                  </Label>
                }
              />
            )}
          </div>
        </Container>
      </div>
    </PostLayout>
  )
}

export default ArchivePostTemplate

export const query = graphql`
  query($slug: String!, $nextSlug: String, $previousSlug: String) {
    post: mdx(fields: { slug: { eq: $slug } }) {
      ...BlogPost
      body
      tableOfContents(maxDepth: 3)
    }

    next: mdx(fields: { slug: { eq: $nextSlug } }) {
      ...BlogPost
    }

    previous: mdx(fields: { slug: { eq: $previousSlug } }) {
      ...BlogPost
    }
  }
`
