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
    className={`mx-4 text-lg hover:text-black ${className ? className : ""}`}
    activeClassName="text-black"
  >
    {children}
  </Link>
)

export default NavbarLink
