const indexName = process.env.GATSBY_ALGOLIA_INDEX_NAME

const query = `
  {
    allMdx {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM D, YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

const mdxToAlgoliaRecord = ({
  node: { id, fields, frontmatter, timeToRead },
}) => {
  return {
    objectID: id,
    timeToRead,
    ...fields,
    ...frontmatter,
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
