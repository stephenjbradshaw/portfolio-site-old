import styled from "styled-components"
import ThemeButton from "../components/theme-button"

export const StyledThemeButton = styled(ThemeButton)`
  grid-column: 3;
  grid-row: 1;
  justify-self: end;
  align-self: center;

  width: 40px;
  height: 25px;
  border-radius: 100px;
  padding: 0rem;
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
    visibility: ${({ isDark }) => (isDark ? "hidden" : "visible")};
    margin-left: 0.1rem;
    color: ${({ theme }) => theme.accent};
  }

  .moon {
    margin-right: 0.1rem;
    visibility: ${({ isDark }) => (isDark ? "visible" : "hidden")};
    color: white;
  }
`
