import React from "react"

type CardCTAProps = {
  children: React.ReactNode
}

const CardCTA: React.FC<CardCTAProps> = ({ children }) => (
  <span className="text-indigo-600 text-lg italic">{children}</span>
)

export default CardCTA
