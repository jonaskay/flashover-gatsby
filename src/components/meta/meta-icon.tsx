import React from "react"

export type MetaIconProps = {
  children: React.ReactNode
}

const MetaIcon: React.FC<MetaIconProps> = ({ children }) => (
  <span
    className="inline-block align-middle w-4 h-4 mr-1"
    style={{ marginTop: -1 }}
  >
    {children}
  </span>
)

export default MetaIcon
