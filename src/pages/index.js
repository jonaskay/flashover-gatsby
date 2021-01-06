import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Container from "../components/container"
import BlogPostCard from "../components/blog-post-card"
import PageCard from "../components/page-card"
import CTACard from "../components/cta-card"
import CTAText from "../components/cta-text"
import Meta from "../components/meta/meta"

const IndexPage = () => (
  <Layout
    header={
      <Hero
        title="Flashover"
        subtitle="Blog posts about the technical and non-technical work in the software industry"
      />
    }
  >
    <SEO title="Home" />
    <Container className="max-w-3xl my-8 sm:my-16 grid gap-6 grid-cols-1 md:grid-cols-2">
      <BlogPostCard
        data={{
          image: "https://placedog.net/640/640/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          route: "/",
          title: "Lorem ipsum dolor sit amet",
        }}
        meta={<Meta text="Latest" />}
        size="large"
      />
      <BlogPostCard
        data={{
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "https://placedog.net/520/520/",
          route: "/",
          title: "Lorem ipsum dolor sit amet",
        }}
      />
      <PageCard
        data={{
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "https://placedog.net/480/480/",
          route: "/",
          title: "Lorem ipsum dolor sit amet",
        }}
        footer={<CTAText>Go to archive</CTAText>}
      />
      <CTACard />
    </Container>
  </Layout>
)

export default IndexPage
