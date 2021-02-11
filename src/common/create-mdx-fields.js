const { createFilePath } = require("gatsby-source-filesystem")

const FilenameParser = require("./filename-parser")

const BASE_PATH = "/posts"
const SLUG = "slug"
const DATE = "date"

const createMdxFields = (node, actions, getNode) => {
  const { createNodeField } = actions

  const filename = createFilePath({ node, getNode })
  const parser = new FilenameParser(filename)
  const title = parser.title()
  const slug = `${BASE_PATH}/${title}`
  const date = new Date(parser.year(), parser.month(), parser.day())

  createNodeField({ node, name: SLUG, value: slug })
  createNodeField({ node, name: DATE, value: date })
}

module.exports = createMdxFields
