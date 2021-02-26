import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Paragraph from "./paragraph"
import Heading from "./heading"
import Blockquote from "./blockquote"
import List from "./list"
import Code from "./code"
import InlineCode from "./inline-code"
import Strong from "./strong"
import Link from "./link"
import Wrapper from "./wrapper"

const components = {
  p: Paragraph,
  h2: Heading.H2,
  h3: Heading.H3,
  blockquote: Blockquote,
  ul: List.Unordered,
  ol: List.Ordered,
  li: List.Item,
  code: Code,
  inlineCode: InlineCode,
  strong: Strong,
  a: Link,
  wrapper: Wrapper,
}

type MDXProps = {
  children: string
}

const MDX: React.FC<MDXProps> = ({ children }) => (
  <MDXProvider components={components}>
    <MDXRenderer>{children}</MDXRenderer>
  </MDXProvider>
)

export default MDX
