import React from "react"

import Container from "./container"

const Footer: React.FC = () => (
  <footer>
    <Container className="my-8 sm:my-16 text-center text-lg">
      &copy;&nbsp;
      <a className="text-indigo-600 hover:underline" href="https://kay.pink/">
        Joonas Kykkänen
      </a>
    </Container>
  </footer>
)

export default Footer
