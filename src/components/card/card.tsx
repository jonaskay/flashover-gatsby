import React from "react"
import { Link } from "gatsby"

import CardBody, { CardBodyProps } from "./card-body"
import CardHeader, { CardHeaderProps } from "./card-header"
import CardHeading, { CardHeadingProps } from "./card-heading"
import CardMeta, { CardMetaProps } from "./card-meta"

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

type CardProps = {
  children: React.ReactNode
  columns?: 1 | 2
  theme?: "primary" | "secondary"
  to?: string
}

type CardComponent = React.FC<CardProps> & {
  Body: React.FC<CardBodyProps>
  Header: React.FC<CardHeaderProps>
  Heading: React.FC<CardHeadingProps>
  Meta: React.FC<CardMetaProps>
}

const Card: CardComponent = ({ children, columns, theme, to }) => {
  const columnSpan = columns === 2 ? "md:col-span-2" : "md:col-span-1"
  const backgroundColor = theme ? THEMES[theme].backgroundColor : "bg-white"
  const borderColor = theme ? THEMES[theme].borderColor : "border-gray-200"
  const shadow = to
    ? "shadow hover:shadow-md focus:shadow-md transition-shadow"
    : "shadow"
  const className = `relative col-span-1 ${columnSpan} ${backgroundColor} border ${borderColor} ${shadow}`

  return to ? (
    <Link className={className} to={to}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  )
}

Card.Body = CardBody
Card.Header = CardHeader
Card.Heading = CardHeading
Card.Meta = CardMeta

export default Card
