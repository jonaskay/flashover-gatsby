import React from "react"
import { Link } from "gatsby"
import { connectHits } from "react-instantsearch-dom"

import ArticleMeta from "../article-meta"

type SearchHitsProps = {
  hits: {
    _highlightResult: any
    date: string
    description: string
    objectID: string
    slug: string
    timeToRead: number
    title: string
  }[]
}

const SearchHits = connectHits(({ hits }: SearchHitsProps) => (
  <ol className="search-hits ml-6 list-decimal">
    {hits.map(hit => (
      <li key={hit.objectID} className="my-6 pl-1 text-left">
        <Link to={hit.slug}>
          <h3 className="text-xl text-indigo-600 font-semibold">{hit.title}</h3>
          <div className="text-base text-gray-500">
            <ArticleMeta date={hit.date} timeToRead={hit.timeToRead} />
          </div>
          <div className="text-lg">{hit.description}</div>
        </Link>
      </li>
    ))}
  </ol>
))

export default SearchHits
