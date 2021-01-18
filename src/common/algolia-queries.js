const indexName = process.env.ALGOLIA_INDEX_NAME

const query = `
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          fields {
            slug
          }
          timeToRead
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
    settings: { searchableAttributes: ["title", "description", "slug"] },
  },
]

module.exports = queries
