import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

const SearchBox = connectSearchBox(({ refine, currentRefinement }) => (
  <form className="text-lg" noValidate>
    <input
      type="text"
      placeholder="Search Flashover&hellip;"
      aria-label="Search"
      className="w-full px-2 py-1 border border-indigo-200 shadow"
      onChange={event => refine(event.target.value)}
      value={currentRefinement}
    />
  </form>
))

export default SearchBox
