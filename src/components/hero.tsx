import React from "react"

import Container from "./container"
import NavbarLink from "./navbar-link"
import PageTitle from "./page-title"
import routes from "../common/routes"

type HeroProps = {
  title: string
  subtitle: string
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => (
  <header className="bg-white border-b -mb-24 sm:-mb-36 pb-16 sm:pb-24">
    <Container className="pt-4 text-center sm:text-right">
      <nav className="-mx-4">
        <NavbarLink to={routes.root}>Home</NavbarLink>
        <NavbarLink to={routes.archive}>Archive</NavbarLink>
      </nav>
    </Container>
    <Container className="my-8 sm:my-16">
      <PageTitle subtitle={subtitle}>{title}</PageTitle>
    </Container>
  </header>
)

export default Hero
