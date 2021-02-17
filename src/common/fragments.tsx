import { graphql } from "gatsby"

export const BlogPost = graphql`
  fragment BlogPost on Mdx {
    id
    fields {
      date(formatString: "MMM D, YYYY")
      slug
    }
    frontmatter {
      description
      title
    }
    timeToRead
  }
`
