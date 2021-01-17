import React from "react"

import SiteLayout from "../layouts/site"
import Container from "../components/container"
import Search from "../components/search/search"
import routes from "../common/routes"

const SearchPage: React.FC = () => (
  <SiteLayout path={routes.search} title="Search">
    <Container className="max-w-lg mt-12 mb-8 sm:my-16">
      <Search />
    </Container>
  </SiteLayout>
)

export default SearchPage
