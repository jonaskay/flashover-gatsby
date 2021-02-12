import React from "react"

import Container from "./container"
import SectionHeading from "./section-heading"
import NewsLetterForm from "./newsletter-form"
import RSSLink from "./rss-link"

const CTASection: React.FC = () => (
  <div className="border-t border-b border-indigo-200 bg-indigo-100">
    <Container className="max-w-2xl py-8 text-center">
      <SectionHeading align="center">Subscribe to updates</SectionHeading>
      <NewsLetterForm />
      <div className="mt-4 text-lg text-gray-700">
        Subscribe by <RSSLink>RSS</RSSLink>
        &nbsp;instead
      </div>
    </Container>
  </div>
)

export default CTASection
