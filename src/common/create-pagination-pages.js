const ITEMS_PER_PAGE = 18

const createPaginationPages = async (
  source,
  component,
  actions,
  graphql,
  reporter
) => {
  const { createPage, createRedirect } = actions

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
            node {
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

  const { edges } = data.allFile
  const pageCount = Math.ceil(edges.length / ITEMS_PER_PAGE)

  for (let i = 0; i < pageCount; i++) {
    let path
    if (i === 0) {
      path = `/${source}`

      createRedirect({
        fromPath: `/${source}/page/${i + 1}`,
        toPath: path,
        isPermanent: true,
      })
    } else {
      path = `/${source}/page/${i + 1}`
    }

    createPage({
      path,
      component,
      context: {
        limit: ITEMS_PER_PAGE,
        skip: i * ITEMS_PER_PAGE,
        slug: path,
        currentIndex: i + 1,
        pageCount,
      },
    })
  }
}

module.exports = createPaginationPages
