import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const BioWrapper = styled.section`
  display: flex;
  align-items: center;

  p {
    margin: 0rem;
  }

  a {
    margin: 0rem;
  }
`

const StyledImage = styled(Image)`
  margin-right: 1rem;
  margin-bottom: 0rem;
`

export default function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <BioWrapper>
            <StyledImage
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
            />
            <section>
              <p>
                Written by <strong>{author}</strong>
                {` `}
              </p>
              <a href={`https://www.github.com/${social.github}`}>
                View my projects on github
              </a>
            </section>
          </BioWrapper>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/headshot-circle.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          github
        }
      }
    }
  }
`
