import React from "react"
import Header from "../components/header"
import { GlobalStyle } from "../styled/global.styled"
import { Wrapper, Main, Footer } from "../styled/layout.styled"
import { myContext } from "../../provider"
import { lightTheme, darkTheme } from "../styled/theme.styled"
import { ThemeProvider } from "styled-components"
import "typeface-roboto"

export default function Layout({ children }) {
  return (
    <myContext.Consumer>
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
    </myContext.Consumer>
  )
}
