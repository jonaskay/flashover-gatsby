import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Container from "../components/container"

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Navbar />
    <div className="bg-white border-t border-b">
      <Container className="my-8 sm:my-16 text-center">
        <header>
          <h1 className="text-5xl sm:text-7xl font-semibold">404</h1>
          <div className="max-w-sm mx-auto mt-3 text-center text-2xl sm:text-3xl">
            Page not found
          </div>
        </header>
        <div className="max-w-sm mx-auto mt-8 mb-16 text-lg sm:text-xl">
          Sorry, the page you are looking for cannot be found or is removed
        </div>
      </Container>
    </div>
  </Layout>
)

export default NotFoundPage
