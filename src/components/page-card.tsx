import React from "react"

import CardWrapper from "./card-wrapper"
import CardBody from "./card-body"
import CardHeader from "./card-header"

type PageCardProps = {
  data: {
    description: string
    image: string
    route: string
    title: string
  }
  footer: React.ReactNode
}

const PageCard: React.FC<PageCardProps> = ({ data, footer }) => {
  const { description, image, route, title } = data

  return (
    <CardWrapper to={route}>
      <div className="flex flex-col sm:flex-row md:flex-col h-full">
        <div className="relative flex-none w-full sm:w-64 md:w-full h-40 sm:h-full md:h-40">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={image}
          />
        </div>
        <CardBody
          align="left"
          justify="between"
          header={<CardHeader title={title} />}
          footer={footer}
        >
          {description}
        </CardBody>
      </div>
    </CardWrapper>
  )
}

export default PageCard
