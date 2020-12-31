import React from "react"
import ContainerInner from "./container-inner"

type HeaderProps = {
  title: string
  subtitle: string
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <header className="bg-white border-b pb-36">
    <ContainerInner className="text-center">
      <h1 className="mb-3 text-5xl sm:text-7xl text-indigo-600 font-semibold">
        {title}
      </h1>
      <div className="max-w-sm mx-auto sm:text-lg">{subtitle}</div>
    </ContainerInner>
  </header>
)

export default Header
