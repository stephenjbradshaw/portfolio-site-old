import styled  from "styled-components"
import Img from "gatsby-image"

export const Wrapper = styled.div`
  max-width: 29rem;
  margin: auto;
`

export const StyledImg = styled(Img)`
  margin: auto;
  max-width: 280px;
`

export const StyledTitle = styled.h1`
  animation: fadeIn ease 3s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const StyledTagline = styled.h2`
  animation: fadeInDelay ease 3s;

  @keyframes fadeInDelay {
    0% {
      opacity: 0;
    }
    33% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
