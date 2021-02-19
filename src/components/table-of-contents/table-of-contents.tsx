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
  <>
    <h2>Table of contents</h2>
    <ul className="list-none">
      {data && data.items.map(item => <TableOfContentsItem data={item} />)}
    </ul>
  </>
)

export default TableOfContents
