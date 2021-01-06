import React from "react"

import Card from "./card/card"
import ReadMore from "./read-more"

type BlogPostProps = {
  data: {
    description: string
    image?: string
    route: string
    title: string
  }
  meta?: React.ReactNode
  size?: "large" | "base"
}

const BlogPost: React.FC<BlogPostProps> = ({ data, meta, size }) => {
  const { description, image, route, title } = data
  const header = <Card.Header heading={title} meta={meta} />
  const footer = <ReadMore />

  return (
    <Card size={size || "base"} to={route}>
      <div className="flex flex-col sm:flex-row h-full">
        {size === "large" && image && (
          <div className="relative flex-none w-full sm:w-64 h-40 sm:h-full">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={image}
            />
          </div>
        )}
        <Card.Body
          align="left"
          justify="between"
          header={header}
          footer={footer}
        >
          {description}
        </Card.Body>
      </div>
    </Card>
  )
}

export default BlogPost
