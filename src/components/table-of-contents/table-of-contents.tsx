import React, { useState } from "react"

import ChevronDown from "../chevron-down"
import ChevronUp from "../chevron-up"
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

const TableOfContents: React.FC<TableOfContentsProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleIsExpanded = () => setIsExpanded(!isExpanded)

  const findItemComponents = (accumulator, currentItem) => {
    const component = (
      <TableOfContentsItem
        key={currentItem.url}
        data={currentItem}
        index={accumulator.index}
        maxIndex={isExpanded ? null : 4}
      />
    )

    let index = accumulator.index + 1
    if (currentItem.items) {
      index += currentItem.items.length
    }

    return {
      components: [...accumulator.components, component],
      index,
    }
  }

  return (
    <nav
      aria-label="table of contents"
      className="relative xl:absolute top-0 right-0 xl:h-full xl:w-72 2xl:w-80 pt-4 pb-4 pl-6 xl:pr-4 2xl:pr-8 border rounded xl:border-none bg-gray-50 xl:bg-white text-sm font-sans"
    >
      <div className="xl:sticky xl:top-0 xl:h-screen xl:overflow-y-scroll xl:pt-4 xl:pb-4">
        <div className="xl:pl-3 xl:border-l-4 xl:border-gray-200">
          <h2 className="font-semibold">
            Table of contents
            <button
              className="inline-block xl:hidden w-5 h-5 align-middle ml-1"
              onClick={toggleIsExpanded}
            >
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </button>
          </h2>
          <ul className="list-none">
            {data &&
              data.items.reduce(findItemComponents, {
                components: [],
                index: 0,
              }).components}
          </ul>
          <button
            className="inline-block xl:hidden mt-2 text-indigo-600"
            onClick={toggleIsExpanded}
          >
            {isExpanded ? <>See less&hellip;</> : <>See more&hellip;</>}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default TableOfContents
