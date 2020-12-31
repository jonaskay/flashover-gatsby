import React from "react"

type ContainerInnerProps = {
  children: React.ReactNode
  className?: string
}

const ContainerInner: React.FC<ContainerInnerProps> = ({
  children,
  className,
}) => (
  <div className={`p-4 sm:p-8${className ? ` ${className}` : ""}`}>
    {children}
  </div>
)

export default ContainerInner
