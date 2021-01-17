import React from "react"
import algoliasearch from "algoliasearch"
import { InstantSearch, PoweredBy } from "react-instantsearch-dom"

import SearchBox from "./search-box"
import SearchResults from "./search-results"
import SearchHits from "./search-hits"

const Search: React.FC = () => {
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
    >
      <SearchBox />
      <div className="my-6 text-center text-xl">
        <SearchResults>
          <SearchHits />
        </SearchResults>
      </div>
      <div className="flex justify-center my-8 sm:my-16">
        <PoweredBy className="" />
      </div>
    </InstantSearch>
  )
}

export default Search
