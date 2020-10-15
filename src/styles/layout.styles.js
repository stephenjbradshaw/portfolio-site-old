import styled from "styled-components"
import { Link } from "gatsby"

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 4rem 1fr;
  padding: 0.5rem 1rem;

  background-color: ${props => props.theme.bgOrange};
`

export const Title = styled(Link)`
  grid-column: 1 / span 1;
  align-self: center;

  box-shadow: none;
  text-decoration: none;

  h1 {
    margin: 0;
    font-size: 12pt;
  }
`

export const BurgerButton = styled.button`
  grid-column: 3 / span 1;
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
`

export const Ul = styled.ul`
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
  display: ${props => (props.open ? "flex" : "none")};
  margin: 0;

  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;

  a {
    text-decoration: none;
  }
`

export const Main = styled.main`
  max-width: 80%;
  margin: auto;
  text-align: center;
`

export const Footer = styled.footer`
  text-align: center;
`