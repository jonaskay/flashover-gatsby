import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Heading from "./heading"
import List from "./list"
import Code from "./code"
import InlineCode from "./inline-code"
import Link from "./link"

const components = {
  h2: Heading.H2,
  h3: Heading.H3,
  ul: List,
  li: List.Item,
  code: Code,
  inlineCode: InlineCode,
  a: Link,
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
