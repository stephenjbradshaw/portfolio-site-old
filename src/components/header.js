import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"
import { Nav, Title, BurgerButton, Ul } from "../styles/header.styled"
import { StyledThemeButton } from "../styles/theme-button.styled"
import { themeContext } from "./theme-context"

export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <themeContext.Consumer>
      {context => (
        <header>
          <Nav open={navIsOpen}>
            <Title to={`/`}>
              <h1>{data.site.siteMetadata.title}</h1>
            </Title>
            <StyledThemeButton
              changeTheme={context.changeTheme}
              isDark={context.isDark}
            />
            <BurgerButton
              onClick={() => {
                setNavIsOpen(!navIsOpen)
              }}
            >
              {navIsOpen ? (
                <FaTimes aria-hidden="true" tabIndex="-1" />
              ) : (
                <FaBars aria-hidden="true" tabIndex="-1" />
              )}
              <span>Click to open menu</span>
            </BurgerButton>
            <Ul open={navIsOpen}>
              <li>
                <Link
                  to="/"
                  activeStyle={{
                    fontWeight: "bold",
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about/"
                  activeStyle={{
                    fontWeight: "bold",
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/"
                  activeStyle={{
                    fontWeight: "bold",
                  }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/"
                  activeStyle={{
                    fontWeight: "bold",
                  }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  activeStyle={{
                    fontWeight: "bold",
                  }}
                >
                  Contact
                </Link>
              </li>
            </Ul>
          </Nav>
        </header>
      )}
    </themeContext.Consumer>
  )
}
