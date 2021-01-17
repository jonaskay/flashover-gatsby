import React from "react"

import Header from "./header"
import Breadcrumbs, { BreadcrumbItems } from "./breadcrumbs"
import Title from "./title"

type HeroProps = {
  background?: "bg-gray-100" | "bg-white"
  breadcrumbs?: BreadcrumbItems
  size?: "base" | "large"
  subtitle: React.ReactNode
  title: React.ReactNode
}

const Hero: React.FC<HeroProps> = ({
  background = "bg-gray-100",
  breadcrumbs,
  title,
  size = "base",
  subtitle,
}) => (
  <Header className={background}>
    {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
    <Title size={size} subtitle={subtitle}>
      {title}
    </Title>
  </Header>
)

export default Hero
