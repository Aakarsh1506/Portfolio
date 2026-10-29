import { useEffect, useState } from 'react'

// Returns true when the screen is phone-sized (820px or less)
export default function useIsMobile(breakpoint = 820) {
  const query = `(max-width: ${breakpoint}px)`

  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  )

  useEffect(() => {
    const mq = window.matchMedia(query)
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [query])

  return isMobile
}