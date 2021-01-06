import React from "react"

type ArticleProps = {
  children: React.ReactNode
}

const Article: React.FC<ArticleProps> = ({ children }) => (
  <article className="border-b bg-white">{children}</article>
)

export default Article
