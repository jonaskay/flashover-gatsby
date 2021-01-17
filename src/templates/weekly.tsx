import React from "react"
import { graphql, PageProps } from "gatsby"

import PostLayout from "../layouts/post"
import Container from "../components/container"
import SectionHeading from "../components/section-heading"
import BlogPostCard from "../components/blog-post-card"
import Meta from "../components/meta/meta"
import ArrowLeft from "../components/arrow-left"
import ArrowRight from "../components/arrow-right"
import routes from "../common/routes"

type DataProps = {
  post: {
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
  next?: {
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      description: string
      title: string
    }
  }
  previous?: {
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

const WeeklyTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
  const {
    post: {
      body,
      fields: { slug },
      frontmatter: { title, description, date },
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
      body={body}
      path={slug}
      breadcrumbs={[
        { text: "Flashover", to: routes.root },
        { text: "Archive", to: routes.archive },
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
                meta={
                  <Meta>
                    <Meta.Icon>
                      <ArrowLeft />
                    </Meta.Icon>
                    <Meta.Text>Previous post</Meta.Text>
                  </Meta>
                }
              />
            )}
            {next && (
              <BlogPostCard
                data={next}
                meta={
                  <Meta>
                    <Meta.Text>Next post</Meta.Text>
                    <Meta.Icon>
                      <ArrowRight />
                    </Meta.Icon>
                  </Meta>
                }
              />
            )}
          </div>
        </Container>
      </div>
    </PostLayout>
  )
}

export default WeeklyTemplate

export const query = graphql`
  query($slug: String!, $next: String, $previous: String) {
    post: mdx(fields: { slug: { eq: $slug } }) {
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

    next: mdx(id: { eq: $next }) {
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        description
        title
      }
    }

    previous: mdx(id: { eq: $previous }) {
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
