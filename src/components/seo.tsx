import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type SiteData = {
  site: {
    siteMetadata: {
      author: string
      description: string
      title: string
    }
  }
}

type SEOProps = {
  description?: string
  lang?: string
  meta?: (
    | {
        name: string
        content: string
        property?: undefined
      }
    | {
        property: string
        content: string
        name?: undefined
      }
  )[]
  title: string
}

const SEO: React.FC<SEOProps> = ({ description, lang, meta, title }) => {
  const data: SiteData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            title
          }
        }
      }
    `
  )

  const { site } = data
  const htmlLang = lang || "en"
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        htmlLang,
      }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta || [])}
    />
  )
}

export default SEO
