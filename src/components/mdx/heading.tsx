import React from "react"

import useIntersectableHeading from "../../hooks/use-intersectable-heading"

const H2: React.FC<any> = ({ id, ...rest }) => {
  const ref = useIntersectableHeading(id)

  return (
    <h2
      ref={ref}
      id={id}
      className="mt-12 first:mt-4 mb-4 text-3xl sm:text-4xl text-indigo-600 font-semibold"
      {...rest}
    />
  )
}

const H3: React.FC<any> = ({ id, ...rest }) => {
  const ref = useIntersectableHeading(id)

  return (
    <h3
      ref={ref}
      id={id}
      className="mt-10 mb-4 text-2xl text-indigo-600 font-semibold"
      {...rest}
    />
  )
}

const Heading = { H2, H3 }

export default Heading
