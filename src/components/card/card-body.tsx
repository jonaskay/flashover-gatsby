import React from "react"
import Image, { FluidObject } from "gatsby-image"
import CardBodyText from "./card-body-text"

export type CardBodyProps = {
  align: "center" | "left"
  children: React.ReactNode
  footer?: React.ReactNode
  header?: React.ReactNode
  image?: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
  justify: "between" | "center" | "end"
}

const CardBody: React.FC<CardBodyProps> = ({
  align,
  children,
  footer,
  header,
  image,
  justify,
}) => {
  let justifyContent
  switch (justify) {
    case "between":
      justifyContent = "justify-between"
      break
    case "center":
      justifyContent = "justify-center"
      break
    case "end":
      justifyContent = "justify-end"
      break
    default:
      throw `Invalid value ${justify}`
  }

  let textAlign
  switch (align) {
    case "center":
      textAlign = "text-center"
      break
    case "left":
      textAlign = "text-left"
      break
    default:
      throw `Invalid value ${align}`
  }

  return (
    <div
      className={`flex flex-col ${justifyContent} h-full p-4 sm:p-8 ${textAlign} z-10`}
    >
      <div>
        {header && header}

        {image ? (
          <div className="flex items-start">
            <Image
              className="sm:hidden flex-none w-2/5 mr-4 border"
              fluid={image.childImageSharp.fluid}
            />
            <CardBodyText>{children}</CardBodyText>
          </div>
        ) : (
          <CardBodyText>{children}</CardBodyText>
        )}
      </div>
      {footer && (
        <div className="justify-self-end mt-8 text-right">{footer}</div>
      )}
    </div>
  )
}

export default CardBody
