import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContainerInner from "../components/container-inner"
import ContentCard from "../components/content-card"
import PageCard from "../components/page-card"
import CTACard from "../components/cta-card"
import CardCTA from "../components/card-cta"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContainerInner className="max-w-3xl mx-auto grid gap-6 grid-cols-2">
      <ContentCard
        data={{
          image: "https://placedog.net/640/640/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          route: "/",
          title: "Lorem ipsum dolor sit amet",
        }}
        latest
        size="large"
      />
      <ContentCard
        data={{
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "https://placedog.net/640/640/",
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
        footer={<CardCTA>Go to archive</CardCTA>}
      />
      <CTACard />
    </ContainerInner>
  </Layout>
)

export default IndexPage
