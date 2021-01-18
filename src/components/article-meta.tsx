import React from "react"

type ArticleMetaProps = {
  date: string
  timeToRead: number
}

const ArticleMeta: React.FC<ArticleMetaProps> = ({ date, timeToRead }) => (
  <>
    {date} · {`${timeToRead} min read`}
  </>
)

export default ArticleMeta
