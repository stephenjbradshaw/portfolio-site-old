import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import "typeface-roboto"

const GlobalStyle = createGlobalStyle`
body {
  --orange: #ffcf56;
  margin: 0;
  font-family: "Roboto", "sans-serif";
  font-weight: 300;
  font-size: 16px;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: var(--orange);
`

const Title = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const Nav = styled.nav`
  li {
    display: inline-block;
    margin-right: 0.5rem;
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
