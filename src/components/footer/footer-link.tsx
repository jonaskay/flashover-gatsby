import React from "react"

import styles from "./footer-link.module.css"

type FooterLinkProps = {
  children: React.ReactNode
  href: string
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, href }) => (
  <li className={`inline-block ${styles.wrapper}`}>
    <a href={href} className="text-indigo-600  hover:underline">
      {children}
    </a>
  </li>
)

export default FooterLink
