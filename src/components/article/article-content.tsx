import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Container from "../container"

export type ArticleContentProps = {
  children: string
}

const ArticleContent: React.FC<ArticleContentProps> = ({ children }) => (
  <Container className="article max-w-2xl px-8 pt-4 pb-16">
    <MDXProvider>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  </Container>
)

export default ArticleContent
