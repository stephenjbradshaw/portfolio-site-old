import React, { useState } from "react"
import Header from "../components/header"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/global.styles"
import { lightTheme, darkTheme } from "../styles/theme.styles"
import { Wrapper, Main, Footer } from "../styles/layout.styles"
import "typeface-roboto"

export default function Layout({ children }) {
  const [themeIsLight, setThemeIsLight] = useState(true)

  return (
    <ThemeProvider theme={themeIsLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <Header themeIsLight={themeIsLight} setThemeIsLight={setThemeIsLight} />
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
