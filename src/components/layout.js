import React from "react"
import { GlobalStyle } from "../styles/global"
import Header from "../components/header"
import { Wrapper, Main } from "../styles/layout.styled"
import { StyledFooter } from "../styles/footer.styled"
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
            <StyledFooter/>
          </Wrapper>
        </ThemeProvider>
      )}
    </themeContext.Consumer>
  )
}
