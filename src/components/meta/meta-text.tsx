import React from "react"

export type MetaTextProps = {
  children: React.ReactNode
}

const MetaText: React.FC<MetaTextProps> = ({ children }) => (
  <span className="inline-block align-middle">{children}</span>
)

export default MetaText
