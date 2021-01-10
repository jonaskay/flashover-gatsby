import React from "react"
import { Link } from "gatsby"

import Container from "./container"
import routes from "../common/routes"

const Navbar: React.FC = () => (
  <header className="bg-white">
    <Container className="py-8 sm:pt-12">
      <nav className="text-center">
        <Link
          to={routes.root}
          className="text-3xl sm:text-4xl text-indigo-600 font-semibold"
        >
          Flashover
        </Link>
      </nav>
    </Container>
  </header>
)

export default Navbar
