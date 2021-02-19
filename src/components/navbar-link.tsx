import React from "react"
import { Link } from "gatsby"

const isRootPath = (path: string): boolean => path === "/"

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
    partiallyActive={!isRootPath(to)}
  >
    {children}
  </Link>
)

export default NavbarLink
