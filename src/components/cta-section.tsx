import React from "react"
import { Link } from "gatsby"

import Container from "./container"
import SectionHeading from "./section-heading"
import NewsLetterForm from "./newsletter-form"

const CTASection: React.FC = () => (
  <div className="border-t border-b border-indigo-200 bg-indigo-100">
    <Container className="max-w-2xl py-8 text-center">
      <SectionHeading align="center">Subscribe to updates</SectionHeading>
      <NewsLetterForm />
      <div className="mt-4 text-lg text-gray-700">
        Subscribe by&nbsp;
        <Link to="TODO" className="text-indigo-600 font-semibold">
          RSS
        </Link>
        &nbsp;instead
      </div>
    </Container>
  </div>
)

export default CTASection
