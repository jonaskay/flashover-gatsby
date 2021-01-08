import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article/article"
import ArrowLeft from "../components/arrow-left"
import ArrowRight from "../components/arrow-right"
import Container from "../components/container"
import BlogPostCard from "../components/blog-post-card"
import Meta from "../components/meta/meta"
import SectionHeading from "../components/section-heading"
import CTASection from "../components/cta-section"
import SEO from "../components/seo"

type DataProps = {
  post: {
    body: string
    fields: {
      route: string
    }
    frontmatter: {
      date: string
      description: string
      title: string
    }
  }
  next?: {
    fields: {
      route: string
    }
    frontmatter: {
      date: string
      description: string
      title: string
    }
  }
  previous?: {
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

const ArchiveTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
  const {
    post: {
      body,
      fields: { route },
      frontmatter: { title, description, date },
    },
    next,
    previous,
  } = data

  const columns = next && previous ? "2" : "1"

  return (
    <Layout>
      <SEO title={title} description={description} pathname={route} article />
      <Article>
        <Article.Header
          breadcrumbs={[
            { text: "Flashover", to: "/" },
            { text: "Archive", to: "/archive" },
          ]}
          date={date}
          route={route}
          title={title}
        />
        <Article.Content>{body}</Article.Content>
      </Article>
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
        date(formatString: "MMM DD, YYYY")
        description
        title
      }
    }

    next: mdx(id: { eq: $next }) {
      fields {
        route
      }
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        description
        title
      }
    }

    previous: mdx(id: { eq: $previous }) {
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
`
