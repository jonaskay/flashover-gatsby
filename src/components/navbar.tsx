import React from "react"

import Container from "./container"
import routes from "../common/routes"
import NavbarLink from "./navbar-link"

const Navbar: React.FC = () => (
  <Container className="py-4 sm:py-8">
    <nav className="text-center flex items-center justify-center sm:justify-end">
      <NavbarLink to={routes.root}>Home</NavbarLink>
      <NavbarLink to={routes.archive}>Archive</NavbarLink>
      <NavbarLink to={routes.search} className="inline-block w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          role="img"
        >
          <title>Search</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </NavbarLink>
    </nav>
  </Container>
)

export default Navbar
