import React from "react"

type CTATextProps = {
  children: React.ReactNode
}

const CTAText: React.FC<CTATextProps> = ({ children }) => (
  <span className="text-indigo-600 text-lg italic">{children}</span>
)

export default CTAText
