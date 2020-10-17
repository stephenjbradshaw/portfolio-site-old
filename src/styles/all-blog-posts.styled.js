import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

export const PostsList = styled.ul`
  @media only screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    column-gap: 1rem;
  }
`

export const Post = styled.li`
  width: 100%;
  margin: 1rem 0rem;

  background-color: ${props => props.theme.cardBackground};
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.4);
  border-radius: 7px;
  transition: background-color 0.5s linear;

  :hover {
    transform: scale(1.01);
    transition: 0.1s;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const StyledImage = styled(Image)`
  height: 15rem;
  border-radius: 7px 7px 0px 0px;
`

export const Section = styled.section`
  padding: 1rem;
  text-align: left;
`

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 12pt;
`

export const Description = styled.p`
  margin-bottom: 1rem;
`

export const Date = styled.small`
  text-align: left;
`
