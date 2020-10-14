import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div``

const Footer = styled.footer`
  text-align: center;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: #ffcf56;
`

const Nav = styled.nav`
  ul {
    list-style: none;
  }
  li {
    display: inline-block;
    margin-right: 0.5rem;
  }
`

const Title = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
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
    <Wrapper>
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
      <main>{children}</main>
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
  )
}
