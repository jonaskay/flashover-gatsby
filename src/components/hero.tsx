import React from "react"

import Container from "./container"
import PageTitle from "./page-title"

type HeroProps = {
  title: string
  subtitle: string
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => (
  <header className="bg-white border-b -mb-24 sm:-mb-36 pt-4 pb-16 sm:pb-24">
    <Container className="my-8 sm:my-16">
      <PageTitle subtitle={subtitle}>{title}</PageTitle>
    </Container>
  </header>
)

export default Hero
