import React, { useState } from 'react'

const Context = React.createContext({})

// eslint-disable-next-line react/prop-types
export function ThemeContextProvider ({ children }) {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
  <Context.Provider value={{ darkTheme, setDarkTheme }}>
    {children}
  </Context.Provider>
  )
}

export default Context
