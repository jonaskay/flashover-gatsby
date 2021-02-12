import React from "react"

import Container from "../container"
import MDX from "../mdx"

export type ArticleContentProps = {
  children: string
}

const ArticleContent: React.FC<ArticleContentProps> = ({ children }) => (
  <Container className="article max-w-2xl px-8 pt-4 pb-16">
    <MDX>{children}</MDX>
  </Container>
)

export default ArticleContent
