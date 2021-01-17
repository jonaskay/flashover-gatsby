import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Article from "../components/article/article"
import CTASection from "../components/cta-section"
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
  }
}

const BlogTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
  const {
    mdx: {
      body,
      fields: { slug },
      frontmatter: { title, shortTitle, description, date },
    },
  } = data

  return (
    <Layout>
      <SEO title={title} description={description} path={slug} article />
      <div className="bg-white">
        <Navbar />
      </div>
      <Article>
        <Article.Header
          breadcrumbs={[
            { text: "Flashover", to: routes.root },
            { text: shortTitle },
          ]}
          date={date}
          slug={slug}
          title={title}
        />
        <Article.Content>{body}</Article.Content>
      </Article>
      <CTASection />
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        description
        shortTitle
        title
      }
    }
  }
`
