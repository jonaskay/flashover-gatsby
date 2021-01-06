import React from "react"
import { graphql, PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"
import PostHeader from "../components/post-header"
import PostBody from "../components/post-body"
import ArrowLeft from "../components/arrow-left"
import ArrowRight from "../components/arrow-right"
import Container from "../components/container"
import BlogPostCard from "../components/blog-post-card"
import Meta from "../components/meta/meta"
import SectionHeading from "../components/section-heading"
import CTASection from "../components/cta-section"

const blogPostCardData = post => ({
  description: post.frontmatter.description,
  route: post.fields.route,
  title: post.frontmatter.title,
})

type DataProps = {
  post: {
    body: string
    fields: {
      route: string
    }
    frontmatter: {
      date: string
      title: string
    }
  }
  next?: {
    fields: {
      route: string
    }
    frontmatter: {
      description: string
      title: string
    }
  }
  previous?: {
    fields: {
      route: string
    }
    frontmatter: {
      description: string
      title: string
    }
  }
}

const ArchiveTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
  const {
    post: {
      body,
      fields: { route },
      frontmatter: { title, date },
    },
    next,
    previous,
  } = data

  const columns = next && previous ? "2" : "1"

  return (
    <Layout>
      <Article>
        <PostHeader
          breadcrumbs={[
            { text: "Flashover", to: "/" },
            { text: "Weekly posts", to: "/weekly" },
          ]}
          date={date}
          route={route}
          title={title}
        />
        <PostBody>{body}</PostBody>
      </Article>
      <div className="bg-white">
        <Container className="max-w-3xl py-8">
          <SectionHeading align="center">Read more weekly posts</SectionHeading>
          <div className={`grid gap-6 grid-cols-1 sm:grid-cols-${columns}`}>
            {previous && (
              <BlogPostCard
                data={blogPostCardData(previous)}
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
                data={blogPostCardData(next)}
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
      <CTASection />
    </Layout>
  )
}

export default ArchiveTemplate

export const query = graphql`
  query($route: String!, $next: String, $previous: String) {
    post: mdx(fields: { route: { eq: $route } }) {
      body
      fields {
        route
      }
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
    }

    next: mdx(id: { eq: $next }) {
      fields {
        route
      }
      frontmatter {
        title
        description
      }
    }

    previous: mdx(id: { eq: $previous }) {
      fields {
        route
      }
      frontmatter {
        title
        description
      }
    }
  }
`
