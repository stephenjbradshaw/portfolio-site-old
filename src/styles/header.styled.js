import styled from "styled-components"
import { Link } from "gatsby"

export const Nav = styled.nav`
  display: grid;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.navBackground};
  color: ${props => props.theme.navText};
  transition: background-color 0.5s linear;

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
    font-size: 13pt;
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
    margin: 0rem 0.5rem;
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
    font-size: 13pt;

    :hover {
      font-weight: bold;
    }
  }
`
