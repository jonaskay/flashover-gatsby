import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type SiteData = {
  site: {
    siteMetadata: {
      author: string
      description: string
      image: string
      title: string
      url: string
    }
  }
}

type SEOProps = {
  article?: boolean
  description?: string
  image?: string
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
  pathname?: string
  title?: string
}

const SEO: React.FC<SEOProps> = ({
  article,
  description,
  image,
  lang,
  meta,
  pathname,
  title,
}) => {
  const data: SiteData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            image
            title
            url
          }
        }
      }
    `
  )

  const {
    site: { siteMetadata },
  } = data
  const htmlLang = lang || "en"
  const metaDescription = description || siteMetadata.description
  const metaImage = `${siteMetadata.url}${image || siteMetadata.image}`
  const metaUrl = `${siteMetadata.url}${pathname || `/`}`
  const defaultTitle = siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        htmlLang,
      }}
      defaultTitle={defaultTitle}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: metaImage,
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
          content: article ? `article` : `website`,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ].concat(meta || [])}
    />
  )
}

export default SEO
