import React from "react"

export type CardHeadingProps = {
  children: React.ReactNode
  className?: string
}

const CardHeading: React.FC<CardHeadingProps> = ({ children, className }) => (
  <h2 className={`item-heading ${className ? className : ""}`}>{children}</h2>
)

export default CardHeading
