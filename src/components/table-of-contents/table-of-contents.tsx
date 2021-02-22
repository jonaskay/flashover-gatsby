import React from "react"

import TableOfContentsItem from "./table-of-contents-item"

type Item = {
  title: string
  url: string
}

type TableOfContentsItem = Item & {
  items?: Item[]
}

export type TableOfContentsData = { items: TableOfContentsItem[] }

type TableOfContentsProps = {
  data?: TableOfContentsData
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ data }) => (
  <nav className="absolute top-0 right-0 max-w-xs h-full -mr-80 pt-4 pl-8 text-sm font-sans">
    <div className="sticky top-0 pt-4">
      <h2>Table of contents</h2>
      <ul className="list-none">
        {data &&
          data.items.map(item => (
            <TableOfContentsItem key={item.url} data={item} />
          ))}
      </ul>
    </div>
  </nav>
)

export default TableOfContents
