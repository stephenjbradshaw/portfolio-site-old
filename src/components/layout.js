import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import "typeface-roboto"

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

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 5rem;
  background-color: var(--orange);
  padding-left: 1rem;
  padding-right: 1rem;
`

const Title = styled(Link)`
  align-self: center;
  box-shadow: none;
  text-decoration: none;

  h1 {
    font-size: 12pt;
  }
`

const Nav = styled.nav`
  grid-column-start: 2;
  grid-column-end: span 2;
  align-self: center;

  li {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    display: inline-block;
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
      <Header>
        <Title to={`/`}>
          <h1>{data.site.siteMetadata.title}</h1>
        </Title>
        <Nav>
          <ul>
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
          </ul>
        </Nav>
      </Header>
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
