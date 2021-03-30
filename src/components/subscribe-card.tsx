import React from "react"

import Card from "./card/card"
import NewsLetterForm from "./newsletter-form"
import RSSLink from "./rss-link"

type SubscribeCardProps = {
  columns: 1 | 2
}

const SubscribeCard: React.FC<SubscribeCardProps> = ({ columns = 1 }) => (
  <Card columns={columns} theme="primary">
    <Card.Body
      align="center"
      justify="center"
      header={<Card.Header heading={"Subscribe to updates"} />}
    >
      <div className="mb-2">
        Subscribe by <RSSLink>RSS</RSSLink>
      </div>
      <div className="my-4 italic">or</div>
      <div className="mb-4">Join the newsletter</div>
      <NewsLetterForm />
    </Card.Body>
  </Card>
)

export default SubscribeCard
