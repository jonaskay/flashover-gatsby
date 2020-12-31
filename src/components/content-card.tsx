import React from "react"

import CardWrapper from "./card-wrapper"
import CardBody from "./card-body"
import CardHeader from "./card-header"
import CardCTA from "./card-cta"

type ContentCardProps = {
  data: {
    description: string
    image: string
    route: string
    title: string
  }
  latest?: boolean
  size?: "large" | "base"
}

const ContentCard: React.FC<ContentCardProps> = ({ data, latest, size }) => {
  const { description, image, route, title } = data
  const meta = latest && "Latest"
  const header = <CardHeader title={title} meta={meta} />
  const footer = <CardCTA>Read more&hellip;</CardCTA>

  return (
    <CardWrapper size={size || "base"} to={route}>
      <div className="flex flex-col sm:flex-row h-full">
        {size === "large" && (
          <div className="relative flex-none w-full sm:w-64 h-40 sm:h-full">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={image}
            />
          </div>
        )}
        <CardBody
          align="left"
          justify="between"
          header={header}
          footer={footer}
        >
          {description}
        </CardBody>
      </div>
    </CardWrapper>
  )
}

export default ContentCard
