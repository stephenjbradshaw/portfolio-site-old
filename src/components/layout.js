import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"
import "typeface-roboto"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/global.styles"
import { lightTheme, darkTheme } from "../styles/theme.styles"
import {
  Wrapper,
  Nav,
  Title,
  BurgerButton,
  Ul,
  Main,
  Footer,
  StyledThemeButton,
} from "../styles/layout.styles"

export default function Layout({ children }) {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [themeIsLight, setThemeIsLight] = useState(true)

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
    <ThemeProvider theme={themeIsLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <header>
          <Nav open={navIsOpen}>
            <Title to={`/`}>
              <h1>{data.site.siteMetadata.title}</h1>
            </Title>
            <StyledThemeButton
              themeIsLight={themeIsLight}
              setThemeIsLight={setThemeIsLight}
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/projects/">Projects</Link>
              </li>
              <li>
                <Link to="/blog/">Blog</Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
            </Ul>
          </Nav>
        </header>
        <Main>{children}</Main>
        <Footer>
          <p>© Built by Stephen Bradshaw, {new Date().getFullYear()}</p>
          <p>
            Source code on{" "}
            <a href="https://github.com/stephenjbradshaw/portfolio-site">
              Github
            </a>
          </p>
        </Footer>
      </Wrapper>
    </ThemeProvider>
  )
}
