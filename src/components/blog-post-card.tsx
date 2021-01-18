import React from "react"
import Image, { FluidObject } from "gatsby-image"

import Card from "./card/card"
import ReadMore from "./read-more"
import ArticleMeta from "./article-meta"

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
    timeToRead: number
  }
  featured?: boolean
  label?: React.ReactNode
}

const BlogPost: React.FC<BlogPostProps> = ({ data, featured, label }) => {
  const {
    fields: { slug },
    frontmatter: { date, description, image, title },
    timeToRead,
  } = data
  const header = (
    <Card.Header
      heading={title}
      label={label}
      meta={
        <Card.Meta>
          <ArticleMeta date={date} timeToRead={timeToRead} />
        </Card.Meta>
      }
      featured={featured}
      divider
    />
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
          footer={<ReadMore />}
        >
          {description}
        </Card.Body>
      </div>
    </Card>
  )
}

export default BlogPost
