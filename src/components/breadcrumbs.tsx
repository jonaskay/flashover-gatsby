import React from "react"
import { Link } from "gatsby"

export type BreadcrumbItems = {
  text: string
  to?: string
}[]

type BreadcrumbsProps = {
  className?: string
  items: BreadcrumbItems
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ className, items }) => (
  <nav
    aria-label="breadcrumb"
    className={`mb-2 flex flex-wrap items-center justify-center text-lg sm:text-xl ${
      className ? className : ""
    }`}
  >
    {items.map((item, index) => {
      const divider =
        index + 1 < items.length ? (
          <span className="inline-block w-4 mx-2 text-indigo-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        ) : null

      return (
        <React.Fragment key={item.text}>
          {item.to ? (
            <Link
              className="text-indigo-600 hover:text-indigo-500"
              to={item.to}
            >
              {item.text}
            </Link>
          ) : (
            <span
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          )}
          {divider}
        </React.Fragment>
      )
    })}
  </nav>
)

export default Breadcrumbs
