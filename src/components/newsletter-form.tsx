import React from "react"

const NewsLetterForm: React.FC = () => (
  <div>
    <form className="text-base">
      <input
        className="block sm:inline-block w-full sm:w-56 mb-2 sm:mb-0 px-2 py-1 border sm:border-r-0 border-indigo-200 shadow-sm text-gray-700"
        placeholder="Email"
      />
      <input
        className="block sm:inline-block w-full sm:w-auto px-2 py-1 bg-yellow-300 border border-yellow-400 sm:border-indigo-200 shadow-sm cursor-pointer"
        type="submit"
        value="Join"
      />
    </form>
  </div>
)

export default NewsLetterForm
