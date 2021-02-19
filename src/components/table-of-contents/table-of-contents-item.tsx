import React, { useState } from "react"
import { Link } from "gatsby"

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
    <li className="my-4" key={data.url}>
      <Link className="font-bold" to={data.url}>
        {data.title}
      </Link>
      &nbsp;
      {data.items && (
        <>
          <button
            onClick={() => toggleIsExpanded()}
            className="sm:hidden text-indigo-600"
          >
            ({isExpanded ? "show less" : "show more"})
          </button>

          <div className={`sm:block sm:ml-4 ${isExpanded ? "" : "hidden"}`}>
            {data.items.map((item, index) => (
              <span key={item.url}>
                {index !== 0 && (
                  <span className="mx-2 text-gray-600">&middot;</span>
                )}
                <Link to={item.url}>{item.title}</Link>
              </span>
            ))}
          </div>
        </>
      )}
    </li>
  )
}

export default TableOfContentsItem
