import React from "react"

import CardWrapper from "./card-wrapper"
import CardBody from "./card-body"
import CardHeading from "./card-heading"

const CTACard: React.FC = () => (
  <CardWrapper>
    <CardBody
      align="center"
      justify="center"
      theme="primary"
      header={<CardHeading>Subscribe to updates</CardHeading>}
    >
      <div className="mb-2">Subscribe by RSS</div>
      <div className="my-4 italic">or</div>
      <div className="mb-4">Join the newsletter</div>
      <form className="text-base">
        <input
          className="block sm:inline-block w-full sm:w-56 mb-2 sm:mb-0 px-2 py-1 border sm:border-r-0 border-indigo-200 shadow-sm text-gray-700"
          placeholder="Email"
        />
        <input
          className="block sm:inline-block w-full sm:w-auto px-2 py-1 bg-yellow-300 border sm:border-l-0 border-yellow-400 sm:border-indigo-200 shadow-sm cursor-pointer"
          type="submit"
          value="Join"
        />
      </form>
    </CardBody>
  </CardWrapper>
)

export default CTACard
