import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Main = styled.main`
  flex: 1 1 auto;
  padding: 1rem;
  text-align: center;

  background: ${props => props.theme.background};

  h1 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`