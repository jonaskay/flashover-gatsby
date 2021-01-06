import React from "react"

type PageTitleProps = {
  children: React.ReactNode
  subtitle?: React.ReactNode
}

const PageTitle: React.FC<PageTitleProps> = ({ children, subtitle }) => (
  <>
    <h1 className="text-center text-5xl sm:text-7xl text-indigo-600 font-semibold">
      {children}
    </h1>
    {subtitle && (
      <div className="max-w-sm mx-auto mt-3 text-center text-xl">
        {subtitle}
      </div>
    )}
  </>
)

export default PageTitle
