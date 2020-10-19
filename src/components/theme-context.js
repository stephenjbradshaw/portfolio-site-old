import React, { useState } from "react"

export const themeContext = React.createContext()

const Provider = props => {
  const [isDark, setTheme] = useState(false)

  return (
    <themeContext.Provider
      value={{
        isDark,
        changeTheme: () => setTheme(!isDark),
      }}
    >
      {props.children}
    </themeContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
