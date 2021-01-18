import React from "react"

export type LabelIconProps = {
  children: React.ReactNode
}

const LabelIcon: React.FC<LabelIconProps> = ({ children }) => (
  <span
    className="inline-block align-middle w-4 h-4 mr-1"
    style={{ marginTop: -1 }}
  >
    {children}
  </span>
)

export default LabelIcon
