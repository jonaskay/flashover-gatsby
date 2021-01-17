import React from "react"

import ArticleContent, { ArticleContentProps } from "./article-content"
import ArticleHeader, { ArticleHeaderProps } from "./article-header"

type ArticleProps = {
  children: React.ReactNode
}

type ArticleComponent = React.FC<ArticleProps> & {
  Header: React.FC<ArticleHeaderProps>
  Content: React.FC<ArticleContentProps>
}

const Article: ArticleComponent = ({ children }) => (
  <article className="border-b border-t bg-white">{children}</article>
)

Article.Header = ArticleHeader
Article.Content = ArticleContent

export default Article
