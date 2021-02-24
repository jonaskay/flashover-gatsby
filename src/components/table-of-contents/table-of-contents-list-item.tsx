import React from "react"

type TableOfContentsListItemProps = {
  children: React.ReactNode
  collapsed?: boolean
}

const TableOfContentsListItem: React.FC<TableOfContentsListItemProps> = ({
  children,
  collapsed,
}) => {
  return (
    <li className={`my-1 xl:block ${collapsed ? "hidden" : ""}`}>{children}</li>
  )
}

export default TableOfContentsListItem
