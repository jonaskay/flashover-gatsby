import React from "react"

import CardHeading from "./card-heading"

type CardHeaderProps = {
  meta?: string
  title: string
}

const CardHeader: React.FC<CardHeaderProps> = ({ meta, title }) => (
  <>
    {meta && (
      <div className="text-sm text-indigo-400 font-sans tracking-wider uppercase">
        {meta}
      </div>
    )}
    <CardHeading>{title}</CardHeading>
    <div className="my-4 h-0.5">
      <span className="inline-block align-top w-1/3 h-full bg-indigo-200" />
    </div>
  </>
)

export default CardHeader
