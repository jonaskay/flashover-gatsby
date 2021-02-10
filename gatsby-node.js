const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const { MDX_SOURCES } = require("./src/common/sources")
const createMdxPages = require("./src/common/create-mdx-pages")
const createPaginationPages = require("./src/common/create-pagination-pages")
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
  for (mdxSource of MDX_SOURCES) {
    const source = mdxSource.name

    await createMdxPages(
      source,
      path.resolve(
        path.join(__dirname, "src", "templates", `${source}-post.tsx`)
      ),
      actions,
      graphql,
      reporter
    )

    if (mdxSource.paginated) {
      await createPaginationPages(
        source,
        path.resolve(path.join(__dirname, "src", "templates", `${source}.tsx`)),
        actions,
        graphql,
        reporter
      )
    }
  }
}
