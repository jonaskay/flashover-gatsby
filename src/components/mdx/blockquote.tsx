import React from "react"

const Blockquote: React.FC<any> = props => (
  <blockquote
    className="my-6 sm:ml-3 pl-3 border-l-2 border-gray-200 text-gray-500 italic"
    {...props}
  />
)

export default Blockquote
