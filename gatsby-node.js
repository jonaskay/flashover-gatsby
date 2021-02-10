const path = require("path")

const { isSourceableMdxFile, MDX_SOURCES } = require("./src/common/sources")
const createMdxFields = require("./src/common/create-mdx-fields")
const createMdxPages = require("./src/common/create-mdx-pages")
const createPaginationPages = require("./src/common/create-pagination-pages")

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (isSourceableMdxFile(node, getNode)) {
    createMdxFields(node, actions, getNode)
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
