import React from "react"
import { Link } from "gatsby"

type NavbarLinkProps = {
  children: React.ReactNode
  className?: string
  to: string
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, className, to }) => (
  <Link
    to={to}
    className={`mx-4 text-lg text-gray-500 hover:text-gray-900 ${
      className ? className : ""
    }`}
    activeClassName="text-gray-900"
  >
    {children}
  </Link>
)

export default NavbarLink
