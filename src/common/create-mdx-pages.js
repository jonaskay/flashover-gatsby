const createMdxPages = async (
  source,
  component,
  actions,
  graphql,
  reporter
) => {
  const { createPage } = actions

  const { data } = await graphql(
    `
      query($source: String!) {
        allFile(
          filter: {
            sourceInstanceName: { eq: $source }
            internal: { mediaType: { eq: "text/mdx" } }
          }
          sort: { fields: [name], order: ASC }
        ) {
          edges {
            next {
              childMdx {
                fields {
                  slug
                }
              }
            }
            node {
              childMdx {
                fields {
                  slug
                }
              }
            }
            previous {
              childMdx {
                fields {
                  slug
                }
              }
            }
          }
        }
      }
    `,
    { source }
  )

  if (data.errors) {
    reporter.panicOnBuild(`Errors while loading MDX files`)
  }

  data.allFile.edges.forEach(edge => {
    const { node, next, previous } = edge
    const { slug } = node.childMdx.fields

    createPage({
      path: slug,
      component,
      context: {
        slug: slug,
        nextSlug: next?.childMdx.fields.slug,
        previousSlug: previous?.childMdx.fields.slug,
      },
    })
  })
}

module.exports = createMdxPages
