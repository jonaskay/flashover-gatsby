import React from "react"
import { Link } from "gatsby"

type TableOfContentsItemProps = {
  children?: React.ReactNode
  title: string
  url: string
}

const TableOfContentsItem: React.FC<TableOfContentsItemProps> = ({
  children,
  title,
  url,
}) => (
  <li>
    <Link className="font-bold" to={url}>
      {title}
    </Link>
    {children}
  </li>
)

export default TableOfContentsItem
