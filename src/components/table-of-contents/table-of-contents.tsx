import { Link } from "gatsby"
import React from "react"

import TableOfContentsItem from "./table-of-contents-item"

type TableOfContentsProps = {
  data: TableOfContentsData
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ data }) => (
  <>
    <h2>Table of contents</h2>
    <ul className="toc">
      {data.items.map(item => (
        <TableOfContentsItem key={item.url} title={item.title} url={item.url}>
          {item.items && (
            <div className="ml-4">
              {item.items.map((childItem, index) => (
                <span key={childItem.url}>
                  {index !== 0 && (
                    <span className="mx-2 text-gray-600">&middot;</span>
                  )}
                  <Link to={childItem.url}>{childItem.title}</Link>
                </span>
              ))}
            </div>
          )}
        </TableOfContentsItem>
      ))}
    </ul>
  </>
)

export default TableOfContents
