import React from "react"
import { Link } from "gatsby"

type CardWrapperProps = {
  children: React.ReactNode
  size?: "large" | "base"
  to?: string
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children, size, to }) => {
  const columnSpan = size === "large" ? 2 : 1
  const shadow = to
    ? "shadow hover:shadow-md focus:shadow-md transition-shadow"
    : "shadow"
  const className = `relative col-span-${columnSpan} ${shadow}`

  return to ? (
    <Link className={className} to={to}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  )
}

export default CardWrapper
