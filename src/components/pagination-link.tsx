import React from "react"
import { Link } from "gatsby"

type PaginationLinkProps = {
  direction: "next" | "prev"
  to: string
}

const PaginationLink: React.FC<PaginationLinkProps> = ({ direction, to }) => (
  <Link
    to={to}
    className="inline-block align-middle w-4 h-4 mx-2 text-indigo-600"
    style={{ marginTop: 1 }}
  >
    {direction === "prev" ? (
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
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      </svg>
    ) : (
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
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    )}
  </Link>
)

export default PaginationLink
