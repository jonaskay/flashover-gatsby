import React from "react"

type ContainerInnerProps = {
  children: React.ReactNode
  className?: string
}

const ContainerInner: React.FC<ContainerInnerProps> = ({
  children,
  className,
}) => (
  <div
    className={`my-8 sm:my-16 px-4 sm:px-8${className ? ` ${className}` : ""}`}
  >
    {children}
  </div>
)

export default ContainerInner
