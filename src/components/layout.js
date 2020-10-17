import React from "react"
import Header from "../components/header"
import { GlobalStyle } from "../styles/global"
import { Wrapper, Main, Footer } from "../styles/layout.styled"
import { themeContext } from "./theme-context"
import { lightTheme, darkTheme } from "../styles/themes"
import { ThemeProvider } from "styled-components"
import "typeface-roboto"

export default function Layout({ children }) {
  return (
    <themeContext.Consumer>
      {context => (
        <ThemeProvider theme={context.isDark ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Wrapper>
            <Header />
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
      )}
    </themeContext.Consumer>
  )
}
