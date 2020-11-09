import React from "react"

export default function Footer({className}) {
  return (
    <footer className={className}>
      <p>© Built with ♥ by Stephen Bradshaw, {new Date().getFullYear()}</p>
      <p>
        Source code on{" "}
        <a href="https://github.com/stephenjbradshaw/portfolio-site">Github</a>
      </p>
    </footer>
  )
}
