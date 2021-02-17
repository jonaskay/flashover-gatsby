import React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { FluidObject } from "gatsby-image"

import LandingLayout from "../layouts/landing"
import SEO from "../components/seo"
import Container from "../components/container"
import BlogPostCard from "../components/blog-post-card"
import PageCard from "../components/page-card"
import CTACard from "../components/cta-card"
import CTAText from "../components/cta-text"
import Label from "../components/label/label"
import routes from "../common/routes"

type DataProps = {
  site: {
    siteMetadata: {
      description
      title
    }
  }
  allFile: {
    edges: {
      node: {
        childMdx: {
          id: string
          fields: {
            date: string
            slug: string
          }
          frontmatter: {
            description: string
            image: {
              childImageSharp: {
                fluid: FluidObject
              }
            }
            title: string
          }
          timeToRead
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
    allFile: { edges },
  } = data

  return (
    <LandingLayout
      title={
        <Link
          to={routes.ROOT}
          className="text-indigo-600 hover:text-indigo-500"
        >
          {title}
        </Link>
      }
      subtitle={description}
    >
      <SEO />
      <Container className="max-w-3xl my-8 grid gap-6 grid-cols-1 md:grid-cols-2">
        {edges.map(({ node }, index) => {
          const mdx = node.childMdx
          const label = index === 0 && <Label text="Latest" />

          return (
            <BlogPostCard
              key={mdx.id}
              data={mdx}
              label={label}
              featured={index === 0}
            />
          )
        })}
        <PageCard
          data={{
            description:
              "I wrote a blog post every week for 2 years. You can find those posts here.",
            path: routes.ARCHIVE,
            title: "Weekly blog (2018-2020)",
          }}
          footer={<CTAText>Go to archive</CTAText>}
        />
        <CTACard />
      </Container>
    </LandingLayout>
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
    allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        internal: { mediaType: { eq: "text/mdx" } }
      }
      sort: { fields: [name], order: DESC }
    ) {
      edges {
        node {
          childMdx {
            ...BlogPost
            frontmatter {
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
