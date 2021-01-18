import React from "react"

export type CardHeadingProps = {
  children: React.ReactNode
  className?: string
}

const CardHeading: React.FC<CardHeadingProps> = ({ children, className }) => (
  <h3 className={`item-heading ${className ? className : ""}`}>{children}</h3>
)

export default CardHeading
