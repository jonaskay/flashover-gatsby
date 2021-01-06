import React from "react"

export type CardHeadingProps = {
  children: React.ReactNode
}

const CardHeading: React.FC<CardHeadingProps> = ({ children }) => (
  <h3 className="item-heading">{children}</h3>
)

export default CardHeading
