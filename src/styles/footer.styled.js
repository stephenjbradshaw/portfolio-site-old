import styled from "styled-components"
import Footer from "../components/footer"

export const StyledFooter = styled(Footer)`
  padding: 4rem 0rem 1rem;
  text-align: center;

  background: ${props => props.theme.footerBackground};

  p {
    margin: 0rem;
  }

  .social {
    svg {
      height: 1.5rem;
      width: 1.5rem;
    }

    a {
      margin: 0.25rem;
    }
  }
`
