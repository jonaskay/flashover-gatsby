import React from "react"
import Image, { FluidObject } from "gatsby-image"

import Card from "./card/card"
import ReadMore from "./read-more"

type BlogPostProps = {
  data: {
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      description: string
      image?: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
      title: string
    }
  }
  featured?: boolean
  meta?: React.ReactNode
}

const BlogPost: React.FC<BlogPostProps> = ({ data, featured, meta }) => {
  const {
    fields: { slug },
    frontmatter: { date, description, image, title },
  } = data
  const header = <Card.Header heading={title} meta={meta} featured={featured} />
  const footer = (
    <div className="flex items-center justify-between">
      <div className="text-gray-700">{date}</div>
      <ReadMore />
    </div>
  )

  return (
    <Card columns={featured ? 2 : 1} to={slug}>
      <div className="flex flex-col sm:flex-row h-full">
        {featured && image && (
          <div className="hidden sm:block flex-none w-64 h-full">
            <Image
              className="h-full"
              imgStyle={{ objectFit: "cover" }}
              fluid={image.childImageSharp.fluid}
            />
          </div>
        )}
        <Card.Body
          align="left"
          image={image}
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
