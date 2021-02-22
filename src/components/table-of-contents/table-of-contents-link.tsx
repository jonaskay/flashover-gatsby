import React, { useContext } from "react"
import { navigate } from "gatsby"

import { HeadingContext } from "../../context/provider"

type TableOfContentsLinkProps = {
  children: React.ReactNode
  to: string
}

const TableOfContentsLink: React.FC<TableOfContentsLinkProps> = ({
  children,
  to,
}) => {
  const { onScreenHeadings, fallbackHeading, navigateToHeading } = useContext(
    HeadingContext
  )

  let isActive
  if (onScreenHeadings.length > 0) {
    isActive = onScreenHeadings[0] === to
  } else {
    isActive = fallbackHeading === to
  }

  return (
    <button
      onClick={() => {
        navigate(to)
        navigateToHeading(to)
      }}
      className={`text-left ${
        isActive ? "text-indigo-600 font-bold" : "text-gray-600"
      }`}
    >
      {children}
    </button>
  )
}

export default TableOfContentsLink
