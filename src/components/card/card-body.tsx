import React from "react"
import Image, { FluidObject } from "gatsby-image"

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
}) => (
  <div
    className={`flex flex-col justify-${justify} h-full p-4 sm:p-8 text-${align} z-10`}
  >
    <div>
      {header && header}

      {image ? (
        <div className="flex items-start">
          <Image
            className="sm:hidden flex-none w-2/5 mr-4 border"
            fluid={image.childImageSharp.fluid}
          />
          <div className="text-lg">{children}</div>
        </div>
      ) : (
        <div className="text-lg">{children}</div>
      )}
    </div>
    {footer && <div className="justify-self-end mt-8 text-right">{footer}</div>}
  </div>
)

export default CardBody
