import React from "react"

import Container from "../container"
import MDX from "../mdx/mdx"

export type ArticleContentProps = {
  children: string
  tableOfContents: TableOfContentsData
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  children,
  tableOfContents,
}) => (
  <Container className="article max-w-2xl px-8 pt-4 pb-16">
    <MDX tableOfContents={tableOfContents}>{children}</MDX>
  </Container>
)

export default ArticleContent
