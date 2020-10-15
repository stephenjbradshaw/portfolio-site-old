import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import "typeface-roboto"
import { FaBars, FaTimes } from "react-icons/fa"

const GlobalStyle = createGlobalStyle`
body {
   --orange: #ffcf56;
   --dark-grey: #303030;
  margin: 0;
  font-family: "Roboto", "sans-serif";
  font-weight: 300;
  font-size: 16px;
  color: var(--dark-grey)
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

a {
  color: inherit;
}
`

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 4rem 1fr;
  padding: 0.5rem 1rem;

  background-color: var(--orange);
`

const Title = styled(Link)`
  grid-column: 1 / span 1;
  align-self: center;

  box-shadow: none;
  text-decoration: none;

  h1 {
    margin: 0;
    font-size: 12pt;
  }
`

const BurgerButton = styled.button`
  grid-column: 3 / span 1;
  justify-self: end;
  align-self: center;
  height: 20px;
  width: 20px;
  padding: 0;

  border: none;
  background: none;
  cursor: pointer;

  svg {
    position: relative;
    width: 20px;
    height: 20px;
    outline: none;
  }

  span {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
`

const Ul = styled.ul`
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
  display: ${props => (props.open ? "flex" : "none")};
  margin: 0;

  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;

  li {
    transition: 0.5s;
  }

  a {
    text-decoration: none;
  }
`

const Main = styled.main`
  max-width: 80%;
  margin: auto;
  text-align: center;
`

const Footer = styled.footer`
  text-align: center;
`

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
    <>
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
    </>
  )
}
