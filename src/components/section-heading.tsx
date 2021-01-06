import React from "react"

type SectionHeadingProps = {
  align?: "center" | "left" | "right"
  children: React.ReactNode
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ align, children }) => (
  <h2
    className={`mb-8 text-${
      align || "left"
    } text-2xl sm:text-4xl font-semibold`}
  >
    {children}
  </h2>
)

export default SectionHeading
