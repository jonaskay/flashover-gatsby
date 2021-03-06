import React from "react"

import Container from "./container"
import routes from "../common/routes"
import NavbarLink from "./navbar-link"

const Navbar: React.FC = () => (
  <Container className="py-4 sm:py-8">
    <nav className="flex items-center justify-center sm:justify-end text-center text-gray-600">
      <NavbarLink to={routes.ROOT}>Home</NavbarLink>
      <NavbarLink to={routes.ARCHIVE}>Archive</NavbarLink>
      <NavbarLink to={routes.SEARCH} className="inline-block w-5">
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
