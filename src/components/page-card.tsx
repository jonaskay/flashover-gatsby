import React from "react"

import Card from "./card/card"

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
    <Card to={route}>
      <div className="flex flex-col sm:flex-row md:flex-col h-full">
        <div className="relative flex-none w-full sm:w-64 md:w-full h-40 sm:h-full md:h-40">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={image}
          />
        </div>
        <Card.Body
          align="left"
          justify="between"
          header={<Card.Header heading={title} />}
          footer={footer}
        >
          {description}
        </Card.Body>
      </div>
    </Card>
  )
}

export default PageCard
