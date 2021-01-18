import { graphql } from "gatsby"

export const BlogPost = graphql`
  fragment BlogPost on Mdx {
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
`
