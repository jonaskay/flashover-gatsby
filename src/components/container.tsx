import React from "react"

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div
    className={`container mx-auto px-4 sm:px-8${
      className ? ` ${className}` : ""
    }`}
  >
    {children}
  </div>
)

export default Container
