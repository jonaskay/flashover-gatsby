const feedBuilder = require("./src/common/feed-builder")

module.exports = {
  siteMetadata: {
    title: `Flashover`,
    description: `Blog posts about the technical and non-technical work in the software industry`,
    image: "/images/default.jpg",
    url: "https://www.flashover.blog",
    author: `@joonaskykkanen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
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
        setup: ({ query: { site } }) => feedBuilder.feedOptions(site),
        feeds: [
          {
            serialize: ({ query: { site, allFile } }) => {
              return allFile.edges.map(({ node }) =>
                feedBuilder.itemOptions(site, node)
              )
            },
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
            output: "/feed.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `archive`,
        path: `${__dirname}/src/content/archive`,
      },
    },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
