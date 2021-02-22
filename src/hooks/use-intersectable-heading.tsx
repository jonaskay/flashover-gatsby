import { MutableRefObject, useContext, useEffect, useRef } from "react"

import useIntersectable from "./use-intersectable"
import { HeadingContext } from "../context/provider"

const useIntersectableHeading = (id: string): MutableRefObject<any> => {
  const ref = useRef(null)

  const [
    isIntersecting,
    intersectionRatio,
    intersectionDirection,
  ] = useIntersectable(ref)

  const {
    navigatedHeading,
    deleteOnScreenHeading,
    insertOnScreenHeading,
  } = useContext(HeadingContext)

  const heading = `#${id}`

  useEffect(() => {
    if (isIntersecting) {
      insertOnScreenHeading(heading)
    }
  }, [heading, navigatedHeading, isIntersecting])

  useEffect(() => {
    if (isIntersecting) {
      const isOnScreen = intersectionRatio !== 0
      const hasAppeared = intersectionRatio === 1
      const isDisappearing =
        isOnScreen && !hasAppeared && intersectionDirection === "decreasing"
      const isAppearing =
        isOnScreen && !hasAppeared && intersectionDirection === "increasing"

      if (isDisappearing) {
        deleteOnScreenHeading(heading)
      }

      if (isAppearing) {
        insertOnScreenHeading(heading)
      }
    }
  }, [heading, isIntersecting, intersectionRatio, intersectionDirection])

  return ref
}

export default useIntersectableHeading
