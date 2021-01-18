import React from "react"

import CardHeading from "./card-heading"

export type CardHeaderProps = {
  featured?: boolean
  heading: string
  label?: React.ReactNode
}

const CardHeader: React.FC<CardHeaderProps> = ({
  featured,
  heading,
  label,
}) => (
  <div className={featured && "text-center sm:text-left"}>
    {label}
    <CardHeading>{heading}</CardHeading>
    <div className="my-4 h-0.5">
      <span className="inline-block align-top w-1/3 h-full bg-indigo-200" />
    </div>
  </div>
)

export default CardHeader
