import React, { useState } from "react"

type HeadingContextState = {
  deleteOnScreenHeading: (heading: string) => void
  fallbackHeading: string
  insertOnScreenHeading: (heading: string) => void
  navigatedHeading: string
  navigateToHeading: (heading: string) => void
  onScreenHeadings: string[]
}

const defaultState: HeadingContextState = {
  onScreenHeadings: [],
  navigatedHeading: null,
  fallbackHeading: null,
  insertOnScreenHeading: () => {},
  deleteOnScreenHeading: () => {},
  navigateToHeading: () => {},
}

export const HeadingContext = React.createContext(defaultState)

const insertHeading = (heading: string, headings: string[]): string[] => {
  if (headings.includes(heading)) {
    return headings
  }

  const oldHeadings = [...headings]
  const newHeadings = [heading, ...oldHeadings]

  return newHeadings
}

const deleteHeading = (heading: string, headings: string[]): string[] => {
  const oldHeadings = [...headings]
  const newHeadings = oldHeadings.filter(item => item !== heading)

  return newHeadings
}

const Provider: React.FC = ({ children }) => {
  const [onScreenHeadings, setOnScreenHeadings] = useState([])
  const [navigatedHeading, setNavigatedHeading] = useState(null)
  const [fallbackHeading, setFallbackHeading] = useState(null)

  const insertOnScreenHeading = (heading: string) => {
    const newOnScreenHeadings = insertHeading(heading, onScreenHeadings)

    if (newOnScreenHeadings.length > 0 && heading === fallbackHeading) {
      setFallbackHeading(null)
    }

    setOnScreenHeadings(newOnScreenHeadings)
  }

  const deleteOnScreenHeading = (heading: string) => {
    const newOnScreenHeadings = deleteHeading(heading, onScreenHeadings)

    if (newOnScreenHeadings.length === 0) {
      setFallbackHeading(heading)
    }
    setOnScreenHeadings(newOnScreenHeadings)
  }

  const navigateToHeading = (heading: string) => {
    setNavigatedHeading(heading)
    setFallbackHeading(null)
    setOnScreenHeadings([])
  }

  return (
    <HeadingContext.Provider
      value={{
        onScreenHeadings,
        fallbackHeading,
        navigatedHeading,
        insertOnScreenHeading,
        deleteOnScreenHeading,
        navigateToHeading,
      }}
    >
      {children}
    </HeadingContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
