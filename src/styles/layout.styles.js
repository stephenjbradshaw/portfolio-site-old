import styled from "styled-components"
import { Link } from "gatsby"
import ThemeButton from "../components/theme-button"

export const Nav = styled.nav`
  display: grid;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.navBackground};

  @media only screen and (max-width: 599px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 4rem 1fr;
  }

  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    height: 4rem;
  }
`

export const Title = styled(Link)`
  grid-column: 1;
  align-self: center;

  box-shadow: none;
  text-decoration: none;

  h1 {
    margin: 0;
    font-size: 12pt;
  }
`

export const StyledThemeButton = styled(ThemeButton)`
  grid-column: 3;
  grid-row: 1;
  justify-self: end;
  align-self: center;

  width: 40px;
  height: 25px;
  border-radius: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.themeToggle};
  border: none;
  cursor: pointer;

  @media only screen and (max-width: 599px) {
    margin-right: 2rem;
  }

  svg {
    width: 70%;
    height: 70%;
    outline: none;
  }

  .sun {
    visibility: ${({ themeIsLight }) => (themeIsLight ? "visible" : "hidden")};
    margin-left: 0.1rem;
    color: ${({ theme }) => theme.navBackground};
  }

  .moon {
    margin-right: 0.1rem;
    visibility: ${({ themeIsLight }) => (themeIsLight ? "hidden" : "visible")};
    color: white;
  }
`

export const BurgerButton = styled.button`
  @media only screen and (max-width: 599px) {
    grid-column: 3;
    grid-row: 1;
    justify-self: end;
    align-self: center;
    height: 20px;
    width: 20px;
    padding: 0;

    border: none;
    background: none;
    cursor: pointer;

    svg {
      position: relative;
      width: 20px;
      height: 20px;
      outline: none;
    }

    span {
      position: absolute;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }
  }

  @media only screen and (min-width: 600px) {
    display: none;
  }
`

export const Ul = styled.ul`
  @media only screen and (max-width: 599px) {
    display: ${props => (props.open ? "flex" : "none")};
    grid-column: 3;
    grid-row: 2;
    margin: 0;

    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  }

  @media only screen and (min-width: 600px) {
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  a {
    text-decoration: none;
  }
`

export const Main = styled.main`
  padding: 1rem;
  text-align: center;

  h1 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`

export const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;

  p {
    margin-bottom: 0.5rem;
  }
`
