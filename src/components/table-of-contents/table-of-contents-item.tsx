import React, { useState } from "react"

import TableOfContentsListItem from "./table-of-contents-list-item"
import TableOfContentsLink from "./table-of-contents-link"

type Item = {
  title: string
  url: string
}

export type TableOfContentsItemProps = {
  data: Item & {
    items?: Item[]
  }
  index: number
  maxIndex: number
}

const TableOfContentsItem: React.FC<TableOfContentsItemProps> = ({
  data,
  index,
  maxIndex,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleIsExpanded = () => setIsExpanded(!isExpanded)

  const isCollapsed = maxIndex && index > maxIndex

  return (
    <TableOfContentsListItem collapsed={isCollapsed} key={data.url}>
      <TableOfContentsLink to={data.url}>{data.title}</TableOfContentsLink>
      {data.items && (
        <>
          <button
            onClick={() => toggleIsExpanded()}
            className="sm:hidden text-indigo-600"
          >
            ({isExpanded ? "show less" : "show more"})
          </button>

          <ul className={`sm:block sm:ml-4 ${isExpanded ? "" : "hidden"}`}>
            {data.items.map((item, itemIndex) => {
              const isItemCollapsed = maxIndex && index + itemIndex > maxIndex

              return (
                <TableOfContentsListItem
                  key={item.url}
                  collapsed={isItemCollapsed}
                >
                  <TableOfContentsLink to={item.url}>
                    {item.title}
                  </TableOfContentsLink>
                </TableOfContentsListItem>
              )
            })}
          </ul>
        </>
      )}
    </TableOfContentsListItem>
  )
}

export default TableOfContentsItem
