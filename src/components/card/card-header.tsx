import React from "react"

import CardHeading from "./card-heading"

export type CardHeaderProps = {
  meta?: React.ReactNode
  heading: string
}

const CardHeader: React.FC<CardHeaderProps> = ({ meta, heading }) => (
  <>
    {meta}
    <CardHeading>{heading}</CardHeading>
    <div className="my-4 h-0.5">
      <span className="inline-block align-top w-1/3 h-full bg-indigo-200" />
    </div>
  </>
)

export default CardHeader
