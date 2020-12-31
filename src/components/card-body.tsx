import React from "react"

const THEMES = {
  primary: {
    backgroundColor: "bg-indigo-100",
    borderColor: "border-indigo-200",
  },
  secondary: {
    backgroundColor: "bg-yellow-100",
    borderColor: "border-yellow-200",
  },
}

type CardBodyProps = {
  align: "center" | "left"
  children: React.ReactNode
  footer?: React.ReactNode
  header?: React.ReactNode
  justify: "between" | "center" | "end"
  theme?: "primary" | "secondary"
}

const CardBody: React.FC<CardBodyProps> = ({
  align,
  children,
  footer,
  header,
  justify,
  theme,
}) => {
  const backgroundColor = theme ? THEMES[theme].backgroundColor : "bg-white"
  const borderColor = theme ? THEMES[theme].borderColor : "border-gray-200"

  return (
    <div
      className={`${backgroundColor} border ${borderColor} flex-grow flex flex-col justify-${justify} max-w-sm p-8 text-${align} z-10`}
    >
      <div>
        {header && header}
        <div>{children}</div>
      </div>
      {footer && (
        <div className="justify-self-end mt-8 text-right">{footer}</div>
      )}
    </div>
  )
}

export default CardBody
