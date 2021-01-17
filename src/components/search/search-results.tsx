import React from "react"
import { connectStateResults } from "react-instantsearch-dom"

const SearchResults = connectStateResults(
  ({ children, searchResults, searchState }) => {
    if (!searchState || !searchState.query) {
      return <></>
    }

    if (!searchResults || searchResults.nbHits === 0) {
      return <span className="text-gray-500">No results&hellip;</span>
    }

    return <>{children}</>
  }
)

export default SearchResults
