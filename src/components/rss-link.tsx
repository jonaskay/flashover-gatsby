import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import routes from "../common/routes"

type SiteData = {
  site: {
    siteMetadata: {
      url: string
    }
  }
}

const RSSLink: React.FC = () => {
  const data: SiteData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            url
          }
        }
      }
    `
  )

  return (
    <a
      href={data.site.siteMetadata.url + routes.rss}
      className="text-indigo-600 font-semibold"
    >
      RSS
    </a>
  )
}

export default RSSLink
