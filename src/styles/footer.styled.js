import styled from "styled-components"
import Footer from "../components/footer"

export const StyledFooter = styled(Footer)`
  padding: 2.5rem 0rem 1rem;
  text-align: center;

  background: ${props => props.theme.footerBackground};

  p {
    margin: 0rem;
  }
`
