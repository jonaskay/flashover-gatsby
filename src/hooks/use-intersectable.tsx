import { MutableRefObject, useEffect, useRef, useState } from "react"

type IntersectionDirection = null | "decreasing" | "increasing"

const useIntersectable = (
  ref: MutableRefObject<any>
): [boolean, number, IntersectionDirection] => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [intersectionRatio, setIntersectionRatio] = useState(0)
  const intersectionDirectionState = useState<IntersectionDirection>(null)
  const intersectionDirection: IntersectionDirection =
    intersectionDirectionState[0]
  const setIntersectionDirection: React.Dispatch<IntersectionDirection> =
    intersectionDirectionState[1]
  const [previousRatio, setPreviousRatio] = useState(null)

  const previousRatioRef: MutableRefObject<number> = useRef(null)
  previousRatioRef.current = previousRatio

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentRatio = entry.intersectionRatio
        const previousRatio = previousRatioRef.current

        setIsIntersecting(entry.isIntersecting)
        setIntersectionRatio(currentRatio)

        if (currentRatio > previousRatio) {
          setIntersectionDirection("increasing")
        } else {
          if (currentRatio < previousRatio) {
            setIntersectionDirection("decreasing")
          } else {
            setIntersectionDirection(null)
          }
        }

        setPreviousRatio(currentRatio)
      },
      { threshold: [...Array(100).keys()].map(num => num / 100) }
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect
    }
  }, [ref, previousRatioRef, setIsIntersecting, setIntersectionDirection])

  return [isIntersecting, intersectionRatio, intersectionDirection]
}

export default useIntersectable
