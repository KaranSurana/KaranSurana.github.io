import { createContext, useContext, useMemo, useState } from 'react'

// Shared state the ghost (KARAN.EXE) uses to reach into React-owned
// pieces of the page: the aurora background and the hero headline.
const GhostFXContext = createContext({
  storm: false,
  setStorm: () => {},
  headline: null,
  setHeadline: () => {},
})

export function GhostFXProvider({ children }) {
  const [storm, setStorm] = useState(false)
  const [headline, setHeadline] = useState(null)

  const value = useMemo(
    () => ({ storm, setStorm, headline, setHeadline }),
    [storm, headline],
  )

  return <GhostFXContext.Provider value={value}>{children}</GhostFXContext.Provider>
}

export function useGhostFX() {
  return useContext(GhostFXContext)
}
