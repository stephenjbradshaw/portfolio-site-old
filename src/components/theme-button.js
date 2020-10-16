import React from "react"
import { FaSun, FaMoon } from "react-icons/fa"

export default function ThemeButton({
  themeIsLight,
  setThemeIsLight,
  className,
}) {
  return (
    <button
      className={className}
      onClick={() => {
        setThemeIsLight(!themeIsLight)
      }}
    >
      <FaSun className="sun" aria-hidden="true" tabIndex="-1" />
      <FaMoon className="moon" aria-hidden="true" tabIndex="-1" />
    </button>
  )
}
