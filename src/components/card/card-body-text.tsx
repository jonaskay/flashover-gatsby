import React from "react"

export type CardBodyTextProps = {
  children: React.ReactNode
}

const CardBodyText: React.FC<CardBodyTextProps> = ({ children }) => (
  <div className="text-lg text-gray-900">{children}</div>
)

export default CardBodyText
