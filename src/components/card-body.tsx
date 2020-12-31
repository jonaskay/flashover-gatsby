import React from "react"

type CardBodyProps = {
  align: "center" | "left"
  children: React.ReactNode
  footer?: React.ReactNode
  header?: React.ReactNode
  justify: "between" | "center" | "end"
}

const CardBody: React.FC<CardBodyProps> = ({
  align,
  children,
  footer,
  header,
  justify,
}) => (
  <div
    className={`flex flex-col justify-${justify} p-4 sm:p-8 text-${align} z-10`}
  >
    <div>
      {header && header}
      <div className="text-lg">{children}</div>
    </div>
    {footer && <div className="justify-self-end mt-8 text-right">{footer}</div>}
  </div>
)

export default CardBody
