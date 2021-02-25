import React from "react"

import Container from "../container"
import GitHubLink from "../github-link"
import FooterLink from "./footer-link"

const Footer: React.FC = () => {
  return (
    <footer>
      <Container className="mt-8 sm:mt-16 pb-8 sm:pb-16 text-center text-lg">
        &copy;&nbsp;
        <a className="text-indigo-600 hover:underline" href="https://kay.pink/">
          Joonas Kykkänen
        </a>
        <div className="my-8 text-gray-700">
          Other stuff by me:
          <ul>
            <FooterLink href="https://www.tastyvar.com/">
              tastyvar.com
            </FooterLink>
            <FooterLink href="https://www.nollaviivasata.fi/">
              nollaviivasata.fi
            </FooterLink>
          </ul>
        </div>
        <GitHubLink />
      </Container>
    </footer>
  )
}

export default Footer
