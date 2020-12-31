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
      <div className="relative h-40">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={image}
        />
      </div>
      <CardBody
        align="left"
        justify="end"
        header={<CardHeader title={title} />}
        footer={footer}
      >
        {description}
      </CardBody>
    </CardWrapper>
  )
}

export default PageCard
