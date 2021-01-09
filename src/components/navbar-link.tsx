import React from "react"
import { Link } from "gatsby"

type NavbarLinkProps = {
  children: React.ReactNode
  to: string
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, to }) => (
  <Link className="mx-4 text-lg text-indigo-600" to={to}>
    {children}
  </Link>
)

export default NavbarLink
