const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const FilenameParser = require("./src/common/filename-parser")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const filename = createFilePath({ node, getNode })
    const title = new FilenameParser(filename).title()
    const route = `/posts/${title}`

    createNodeField({ name: "route", node, value: route })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const createPagesFromFiles = (files, template) => {
    const { createPage } = actions

    files.forEach(file => {
      const { node, next, previous } = file
      const { route } = node.childMdx.fields

      createPage({
        path: route,
        component: path.resolve(
          path.join(__dirname, "src", "templates", template)
        ),
        context: {
          next: next && next.childMdx.id,
          previous: previous && previous.childMdx.id,
          route: route,
        },
      })
    })
  }

  const { data } = await graphql(`
    query {
      blog: allFile(
        filter: { sourceInstanceName: { eq: "blog" } }
        sort: { fields: [name], order: ASC }
      ) {
        edges {
          node {
            childMdx {
              fields {
                route
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

      archive: allFile(
        filter: { sourceInstanceName: { eq: "archive" } }
        sort: { fields: [name], order: ASC }
      ) {
        edges {
          node {
            childMdx {
              fields {
                route
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

  createPagesFromFiles(data.blog.edges, "blog-template.tsx")
  createPagesFromFiles(data.archive.edges, "archive-template.tsx")
}
