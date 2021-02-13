import React from "react"

type ContainerProps = {
  as?: "div"
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ as, children, className }) => {
  const Tag = as || "div"

  return (
    <Tag
      className={`container mx-auto px-4 sm:px-8 ${
        className ? `${className}` : ""
      }`}
    >
      {children}
    </Tag>
  )
}

export default Container
