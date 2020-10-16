import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const PostsList = styled.ul`
  @media only screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    column-gap: 1rem;
  }
`

const Post = styled.li`
  width: 100%;
  margin: 1rem 0rem;

  background-color: ${props => props.theme.cardBackground};
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.4);
  border-radius: 7px;
  transition: 0.1s;

  :hover {
    transform: scale(1.01);
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledImage = styled(Image)`
  height: 15rem;
  border-radius: 7px 7px 0px 0px;
`

const Section = styled.section`
  padding: 1rem;
  text-align: left;
`

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 12pt;
`

const Description = styled.p`
  margin-bottom: 1rem;
`

const Date = styled.small`
  text-align: left;
`

export default function AllPosts({ posts }) {
  return (
    <PostsList>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const featuredImage = node.frontmatter.featuredImage

        return (
          <Post key={node.fields.slug}>
            <StyledLink to={`/blog${node.fields.slug}`}>
              {featuredImage && (
                <StyledImage fluid={featuredImage.childImageSharp.fluid} />
              )}
              <Section>
                <Title>
                  <h2>{title}</h2>
                </Title>

                <Description
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <Date>{node.frontmatter.date}</Date>
              </Section>
            </StyledLink>
          </Post>
        )
      })}
    </PostsList>
  )
}
