const indexName = process.env.ALGOLIA_INDEX_NAME

const query = `
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const mdxToAlgoliaRecord = ({ node: { id, frontmatter, fields } }) => {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
  }
}

const queries = [
  {
    query,
    transformer: ({ data }) => data.allMdx.edges.map(mdxToAlgoliaRecord),
    indexName,
  },
]

module.exports = queries
