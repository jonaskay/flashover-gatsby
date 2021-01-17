import React from "react"

import Container from "./container"

type HeaderProps = {
  children: React.ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => (
  <header
    className={`border-b -mb-16 sm:-mb-20 sm:pb-16 ${
      className ? className : ""
    }`}
  >
    <Container className="mt-8 mb-16 sm:my-8">{children}</Container>
  </header>
)

export default Header
