import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper, StyledImg, StyledTitle, StyledTagline } from "../styles/index.styled"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Wrapper>
        <StyledTitle>Hello! I'm Stephen</StyledTitle>
        <StyledTagline>I'm a developer at <a
            href="https://thirst.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            thirst.io
          </a>, a creative coder, and a musician</StyledTagline>
    
        <StyledImg
          fluid={data.file.childImageSharp.fluid}
          alt="Stephen Bradshaw"
        />
        <p>
          This site is a space to showcase my coding projects and to write about
          tech topics that I'm learning about. If you have any questions,{" "}
          <a href="/contact">I'd love to hear from you!</a>
        </p>
      </Wrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    file(relativePath: { eq: "headshot-circle.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
