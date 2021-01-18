import React from "react"

export type LabelTextProps = {
  children: React.ReactNode
}

const LabelText: React.FC<LabelTextProps> = ({ children }) => (
  <span className="inline-block align-middle">{children}</span>
)

export default LabelText
