import React from "react"
import { graphql, PageProps } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Container from "../components/container"
import BlogPostCard from "../components/blog-post-card"
import PageCard from "../components/page-card"
import CTACard from "../components/cta-card"
import CTAText from "../components/cta-text"
import Meta from "../components/meta/meta"

type DataProps = {
  site: {
    siteMetadata: {
      description
      title
    }
  }
  posts: {
    edges: {
      node: {
        childMdx: {
          id: string
          fields: {
            slug: string
          }
          frontmatter: {
            date: string
            description: string
            image: {
              childImageSharp: {
                fluid: FluidObject
              }
            }
            title: string
          }
        }
      }
    }[]
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const {
    site: {
      siteMetadata: { title, description },
    },
    posts: { edges },
  } = data

  return (
    <Layout header={<Hero title={title} subtitle={description} />}>
      <SEO />
      <Container className="max-w-3xl my-8 sm:my-16 grid gap-6 grid-cols-1 md:grid-cols-2">
        {edges.map(({ node }, index) => {
          const mdx = node.childMdx
          const meta = index === 0 && <Meta text="Latest" />

          return (
            <BlogPostCard
              key={mdx.id}
              data={mdx}
              meta={meta}
              featured={index === 0}
            />
          )
        })}
        <PageCard
          data={{
            description:
              "I wrote a blog post every week for 2 years. You can find those posts here.",
            slug: "/archive",
            title: "Weekly blog (2018-2020)",
          }}
          footer={<CTAText>Go to archive</CTAText>}
        />
        <CTACard />
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }

    posts: allFile(
      filter: { sourceInstanceName: { eq: "blog" } }
      sort: { fields: [name], order: DESC }
    ) {
      edges {
        node {
          childMdx {
            id
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              description
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
            }
          }
        }
      }
    }
  }
`
