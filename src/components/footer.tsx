import React from "react"

import Container from "./container"
import FooterLink from "./footer-link"

const Footer: React.FC = () => (
  <footer>
    <Container className="my-8 sm:my-16 text-center text-lg">
      &copy;&nbsp;
      <a className="text-indigo-600 hover:underline" href="https://kay.pink/">
        Joonas Kykkänen
      </a>
      <div className="my-8 text-gray-700">
        Other stuff by me:
        <ul>
          <FooterLink href="https://www.tastyvar.com/">tastyvar.com</FooterLink>
          <li className="inline-block">-</li>
          <FooterLink href="https://www.nollaviivasata.fi/">
            nollaviivasata.fi
          </FooterLink>
        </ul>
      </div>
    </Container>
  </footer>
)

export default Footer
