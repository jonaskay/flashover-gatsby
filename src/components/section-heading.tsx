import React from "react"

type SectionHeadingProps = {
  align?: "center" | "left" | "right"
  children: React.ReactNode
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ align, children }) => {
  let textAlign
  switch (align) {
    case "center":
      textAlign = "text-center"
      break
    case "left":
      textAlign = "text-left"
      break
    case "right":
      textAlign = "text-right"
      break
    default:
      throw `Invalid value ${align}`
  }

  return (
    <h2 className={`mb-8 ${textAlign} text-2xl sm:text-4xl font-semibold`}>
      {children}
    </h2>
  )
}

export default SectionHeading
