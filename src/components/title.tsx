import React from "react"

type TitleProps = {
  children: React.ReactNode
  size?: "base" | "large"
  subtitle?: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ children, size = "base", subtitle }) => (
  <>
    <h1
      className={`text-center font-semibold ${
        size === "large" ? "text-6xl sm:text-8xl" : "text-5xl sm:text-7xl"
      }`}
    >
      {children}
    </h1>
    {subtitle && (
      <div
        className={`max-w-sm mx-auto mt-4 text-center text-xl ${
          size === "large" ? "sm:text-2xl" : ""
        }`}
      >
        {subtitle}
      </div>
    )}
  </>
)

export default Title
