const indexName = process.env.GATSBY_ALGOLIA_INDEX_NAME

const query = `
  {
    allMdx {
      edges {
        node {
          ...BlogPost
        }
      }
    }
  }
`

const mdxToAlgoliaRecord = ({ node: { id, frontmatter, fields } }) => {
  return {
    objectID: id,
    timeToRead,
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
