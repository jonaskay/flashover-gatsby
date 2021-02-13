import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Code from "./code"

const components = {
  code: Code,
}

type MDXProps = {
  children: string
  tableOfContents: TableOfContents
}

const MDX: React.FC<MDXProps> = ({ children, tableOfContents }) => (
  <MDXProvider components={components}>
    <MDXRenderer tableOfContents={tableOfContents}>{children}</MDXRenderer>
  </MDXProvider>
)

export default MDX
