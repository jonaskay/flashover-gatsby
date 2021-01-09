import React from "react"

import Container from "./container"
import PageTitle from "./page-title"

type PageHeaderProps = {
  title: React.ReactNode
  subtitle: React.ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => (
  <header>
    <Container className="mb-8 sm:mb-16">
      <PageTitle subtitle={subtitle}>{title}</PageTitle>
    </Container>
  </header>
)

export default PageHeader
