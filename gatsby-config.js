require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { MDX_SOURCES } = require("./src/common/sources")
const RepositoryParser = require("./src/common/repository-parser")
const feedBuilder = require("./src/common/feed-builder")
const routes = require("./src/common/routes")

module.exports = {
  siteMetadata: {
    title: `Flashover`,
    description: `Blog posts about the technical and non-technical work in the software industry`,
    image: `/images/default.jpg`,
    url: `https://www.flashover.blog`,
    author: `@joonaskykkanen`,
    repository: new RepositoryParser(
      process.env.npm_package_repository_url
    ).url(),
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-import`)(),
          require(`tailwindcss`)(),
          require(`autoprefixer`)(),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                author
                description
                title
                url
              }
            }
          }
        `,
        setup: ({ query: { site } }) =>
          feedBuilder.feedOptions(site.siteMetadata),
        feeds: [
          {
            query: `
            {
              allFile(
                filter: { sourceInstanceName: { eq: "blog" } }
                sort: { fields: [name], order: DESC }
                limit: 10
                ) {
                  edges {
                    node {
                      childMdx {
                        fields {
                          slug
                        }
                        frontmatter {
                          date
                          description
                          title
                        }
                        html
                      }
                    }
                  }
                }
              }
            `,
            serialize: ({ query: { site, allFile } }) => {
              const { url } = site.siteMetadata

              return allFile.edges.map(({ node }) =>
                feedBuilder.itemOptions(url, node)
              )
            },
            output: routes.RSS,
          },
        ],
      },
    },
    ...MDX_SOURCES.map(({ name }) => ({
      resolve: `gatsby-source-filesystem`,
      options: {
        name,
        path: `${__dirname}/src/content/${name}`,
      },
    })),
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/content/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 640,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" /></svg>`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Flashover`,
        short_name: `Flashover`,
        start_url: `/`,
        background_color: `#4F46E5`,
        theme_color: `#4F46E5`,
        display: `minimal-ui`,
        icon: `src/images/flashover-icon.png`,
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-116599641-4`,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/common/algolia-queries"),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
