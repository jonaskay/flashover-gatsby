import React from "react"
import Container from "./container"

type HeroProps = {
  title: string
  subtitle: string
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => (
  <header className="bg-white border-b -mb-24 sm:-mb-36 pt-4 pb-16 sm:pb-24">
    <Container className="my-8 sm:my-16 text-center">
      <h1 className="mb-3 text-5xl sm:text-7xl text-indigo-600 font-semibold">
        {title}
      </h1>
      <div className="max-w-sm mx-auto text-xl">{subtitle}</div>
    </Container>
  </header>
)

export default Hero
