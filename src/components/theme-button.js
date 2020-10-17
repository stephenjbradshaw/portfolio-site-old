import React from "react"
import { FaSun, FaMoon } from "react-icons/fa"

export default function ThemeButton({ className, changeTheme }) {
  return (
    <button
      className={className}
      onClick={() => {
        changeTheme()
      }}
    >
      <FaSun className="sun" aria-hidden="true" tabIndex="-1" />
      <FaMoon className="moon" aria-hidden="true" tabIndex="-1" />
    </button>
  )
}
