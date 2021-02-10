const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const { createMdxPages, MDX_SOURCES } = require("./src/common/create-mdx-pages")
const FilenameParser = require("./src/common/filename-parser")
const routes = require("./src/common/routes")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const filename = createFilePath({ node, getNode })
    const title = new FilenameParser(filename).title()
    const slug = `/posts/${title}`

    createNodeField({ name: "slug", node, value: slug })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  createPagesForPagination = (items, segment, template) => {
    const { createPage, createRedirect } = actions

    const itemsPerPage = 18
    const pageCount = Math.ceil(items.length / itemsPerPage)

    for (let i = 0; i < pageCount; i++) {
      let pathname
      if (i === 0) {
        createRedirect({
          fromPath: `${segment}/page/${i + 1}`,
          toPath: segment,
          isPermanent: true,
        })
        pathname = segment
      } else {
        pathname = `${segment}/page/${i + 1}`
      }

      createPage({
        path: pathname,
        component: path.resolve(
          path.join(__dirname, "src", "templates", template)
        ),
        context: {
          limit: itemsPerPage,
          skip: i * itemsPerPage,
          currentPage: i + 1,
          pageCount,
          pathname,
        },
      })
    }
  }

  const { data } = await graphql(`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "archive" } }
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
          next {
            childMdx {
              id
            }
          }
          previous {
            childMdx {
              id
            }
          }
        }
      }
    }
  `)

  if (data.errors) {
    reporter.panicOnBuild(`Errors while loading MDX files`)
  }

  for (mdxSource of MDX_SOURCES) {
    await createMdxPages(
      mdxSource,
      path.resolve(
        path.join(__dirname, "src", "templates", `${mdxSource}-post.tsx`)
      ),
      createPage,
      graphql,
      reporter
    )
  }

  createPagesForPagination(data.allFile.edges, routes.archive, "archive.tsx")
}
