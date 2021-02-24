import React from "react"

import Container from "../container"

export type ArticleContentProps = {
  children: React.ReactNode
}

const ArticleContent: React.FC<ArticleContentProps> = ({ children }) => (
  <div className="relative max-w-screen-2xl mx-auto">
    <Container className="article max-w-2xl px-8 pt-4 pb-16">
      {children}
    </Container>
  </div>
)

export default ArticleContent
