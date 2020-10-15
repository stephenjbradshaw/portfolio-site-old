import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  bgOrange: "#ffcf56",
  bgWhite: "#FFFFFF",
  text: "#303030",
}

export const darkTheme = {}

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Roboto", "sans-serif";
  font-weight: 300;
  font-size: 16px;
  color: ${props => props.theme.text}
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
