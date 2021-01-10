import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

import Container from "./container"
import FooterLink from "./footer-link"

type Data = {
  file: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
  site: {
    siteMetadata: {
      repository: string
    }
  }
}

const Footer: React.FC = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "github-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 32) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          repository
        }
      }
    }
  `)

  const {
    file: {
      childImageSharp: { fluid },
    },
    site: {
      siteMetadata: { repository },
    },
  } = data

  return (
    <footer>
      <Container className="mt-8 sm:mt-16 pb-8 sm:pb-16 text-center text-lg">
        &copy;&nbsp;
        <a className="text-indigo-600 hover:underline" href="https://kay.pink/">
          Joonas Kykkänen
        </a>
        <div className="my-8 text-gray-700">
          Other stuff by me:
          <ul className="footer-links">
            <FooterLink href="https://www.tastyvar.com/">
              tastyvar.com
            </FooterLink>
            <FooterLink href="https://www.nollaviivasata.fi/">
              nollaviivasata.fi
            </FooterLink>
          </ul>
        </div>
        <a href={repository} className="inline-block w-8">
          <Image fluid={fluid} alt="GitHub repository" />
        </a>
      </Container>
    </footer>
  )
}

export default Footer
