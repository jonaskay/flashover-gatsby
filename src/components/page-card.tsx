import React from "react"

import Card from "./card/card"

type PageCardProps = {
  data: {
    description: string
    route: string
    title: string
  }
  footer: React.ReactNode
}

const PageCard: React.FC<PageCardProps> = ({ data, footer }) => {
  const { description, route, title } = data

  return (
    <Card to={route}>
      <div className="flex flex-col sm:flex-row md:flex-col h-full">
        <Card.Body
          align="center"
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
