import styled from "styled-components"

export const BlogWrapper = styled.div`
  max-width: 45rem;
  margin: auto;
  text-align: left;
`

export const Article = styled.article`
  h1 {
    margin-bottom: 0rem;
  }

  small {
    display: block;
    margin-bottom: 1rem;
  }

  ul,
  ol {
    margin-left: 1.5rem;
  }

  ul li {
    list-style: disc;
  }

  ol li {
    list-style: decimal;
  }

  blockquote {
    font-style: italic;
  }

  img {
    border-radius: 8px;
  }
`

export const Separator = styled.hr`
  margin: 2rem 0rem;
`

export const NavLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
  list-style: none;
  padding: 0;
`
