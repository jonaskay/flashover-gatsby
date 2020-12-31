import React from "react"

type CardHeadingProps = {
  children: React.ReactNode
}

const CardHeading: React.FC<CardHeadingProps> = ({ children }) => (
  <h3 className="card-heading">{children}</h3>
)

export default CardHeading
