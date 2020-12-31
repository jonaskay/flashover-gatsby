import React from "react"
import { Link } from "gatsby"

const THEMES = {
  primary: {
    backgroundColor: "bg-indigo-100",
    borderColor: "border-indigo-200",
  },
  secondary: {
    backgroundColor: "bg-yellow-100",
    borderColor: "border-yellow-400",
  },
}

type CardWrapperProps = {
  children: React.ReactNode
  size?: "large" | "base"
  theme?: "primary" | "secondary"
  to?: string
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  size,
  theme,
  to,
}) => {
  const columnSpan = size === "large" ? 2 : 1
  const backgroundColor = theme ? THEMES[theme].backgroundColor : "bg-white"
  const borderColor = theme ? THEMES[theme].borderColor : "border-gray-200"
  const shadow = to
    ? "shadow hover:shadow-md focus:shadow-md transition-shadow"
    : "shadow"
  const className = `relative col-span-1 md:col-span-${columnSpan} ${backgroundColor} border ${borderColor} ${shadow}`

  return to ? (
    <Link className={className} to={to}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  )
}

export default CardWrapper
