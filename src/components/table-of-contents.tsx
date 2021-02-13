import { Link } from "gatsby"
import React from "react"

type TableOfContentsItemHeading = {
  title: string
  url: string
}

type TableOfContentsItem = TableOfContentsItemHeading & {
  items?: TableOfContentsItemHeading[]
}

export type TableOfContentsData = { items: TableOfContentsItem[] }

type TableOfContentsProps = {
  data?: TableOfContentsData
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ data }) => (
  <>
    <h2>Table of contents</h2>
    <ul className="toc">
      {data &&
        data.items.map(item => (
          <li>
            <Link className="font-bold" to={item.url}>
              {item.title}
            </Link>
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
          </li>
        ))}
    </ul>
  </>
)

export default TableOfContents
