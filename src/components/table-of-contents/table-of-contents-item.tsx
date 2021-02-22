import React, { useState } from "react"

import TableOfContentsLink from "./table-of-contents-link"

type Item = {
  title: string
  url: string
}

export type TableOfContentsItemProps = {
  data: Item & {
    items?: Item[]
  }
}

const TableOfContentsItem: React.FC<TableOfContentsItemProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleIsExpanded = () => setIsExpanded(!isExpanded)

  return (
    <li className="my-1" key={data.url}>
      <TableOfContentsLink to={data.url}>{data.title}</TableOfContentsLink>
      &nbsp;
      {data.items && (
        <>
          <button
            onClick={() => toggleIsExpanded()}
            className="sm:hidden text-indigo-600"
          >
            ({isExpanded ? "show less" : "show more"})
          </button>

          <ul className={`sm:block sm:ml-4 ${isExpanded ? "" : "hidden"}`}>
            {data.items.map(item => {
              return (
                <li key={item.url} className="my-1">
                  <TableOfContentsLink to={item.url}>
                    {item.title}
                  </TableOfContentsLink>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </li>
  )
}

export default TableOfContentsItem
