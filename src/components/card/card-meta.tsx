import React from "react"

export type CardMetaProps = {
  children: React.ReactNode
}

const CardMeta: React.FC<CardMetaProps> = ({ children }) => (
  <div className="mt-1 text-gray-500">{children}</div>
)

export default CardMeta
