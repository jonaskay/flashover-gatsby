import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Container from "./container"

type PostBodyProps = {
  children: string
}

const PostBody: React.FC<PostBodyProps> = ({ children }) => (
  <Container className="article max-w-2xl pt-4 pb-16">
    <MDXProvider>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  </Container>
)

export default PostBody
