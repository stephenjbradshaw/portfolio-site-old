import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"
import "typeface-roboto"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyle } from "../styles/global.styles"
import {
  Nav,
  Title,
  BurgerButton,
  Ul,
  Main,
  Footer,
} from "../styles/layout.styles"

export default function Layout({ children }) {
  const [navIsOpen, setNavOpen] = useState(false)
  
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
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <header>
        <Nav open={navIsOpen}>
          <Title to={`/`}>
            <h1>{data.site.siteMetadata.title}</h1>
          </Title>
          <BurgerButton
            onClick={() => {
              setNavOpen(!navIsOpen)
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
    </ThemeProvider>
  )
}
