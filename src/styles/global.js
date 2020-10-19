import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: "Roboto", "sans-serif";
  font-weight: 300;
  font-size: 16px;
  color: ${props => props.theme.text};
  transition: color 0.5s linear;

}

h1, p, ul, ol {
  line-height: 1.6
}


ul, ol {
  padding: 0rem;
}

li {
  list-style: none;
}

a {
  color: inherit;
}
`
