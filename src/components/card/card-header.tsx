import React from "react"

import CardHeading from "./card-heading"

export type CardHeaderProps = {
  divider?: boolean
  featured?: boolean
  heading: string
  label?: React.ReactNode
  meta?: React.ReactNode
}

const CardHeader: React.FC<CardHeaderProps> = ({
  divider = false,
  featured,
  heading,
  label,
  meta,
}) => (
  <div className={featured ? "text-center sm:text-left" : ""}>
    {label}
    <CardHeading className={!divider && "mb-4"}>{heading}</CardHeading>
    {meta}
    {divider && (
      <div className="my-4 h-0.5">
        <span className="inline-block align-top w-1/3 h-full bg-indigo-200" />
      </div>
    )}
  </div>
)

export default CardHeader
