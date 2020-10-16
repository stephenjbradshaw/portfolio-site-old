import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
 
}

body {
  height: 100vh;
  margin: 0;
  font-family: "Roboto", "sans-serif";
  font-weight: 300;
  font-size: 16px;
  color: ${props => props.theme.text};
  background: ${props => props.theme.background};
  transition: all 0.25s linear;
}

li {
  list-style: none;
}

a {
  color: inherit;
}
`
