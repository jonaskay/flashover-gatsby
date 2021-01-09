import React, { useState } from "react"

const NewsLetterForm: React.FC = () => {
  const [email, setEmail] = useState("")

  return (
    <form
      action="https://blog.us4.list-manage.com/subscribe/post"
      method="POST"
      target="_blank"
    >
      <input type="hidden" name="u" defaultValue="b73d71920d8c65e7a89512877" />
      <input type="hidden" name="id" defaultValue="62229766c3" />
      <input
        type="email"
        name="MERGE0"
        placeholder="Email"
        className="block sm:inline-block w-full sm:w-56 mb-2 sm:mb-0 px-2 py-1 border sm:border-r-0 border-indigo-200 shadow-sm text-gray-700"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type="submit"
        name="submit"
        className="block sm:inline-block w-full sm:w-auto px-2 py-1 bg-yellow-300 border border-yellow-400 sm:border-indigo-200 shadow-sm cursor-pointer"
        value="Join"
      />
    </form>
  )
}

export default NewsLetterForm
