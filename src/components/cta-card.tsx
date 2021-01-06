import React from "react"

import Card from "./card/card"
import NewsLetterForm from "./newsletter-form"

const CTACard: React.FC = () => (
  <Card theme="primary">
    <Card.Body
      align="center"
      justify="center"
      header={<Card.Heading>Subscribe to updates</Card.Heading>}
    >
      <div className="mb-2">Subscribe by RSS</div>
      <div className="my-4 italic">or</div>
      <div className="mb-4">Join the newsletter</div>
      <NewsLetterForm />
    </Card.Body>
  </Card>
)

export default CTACard
