import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper, StyledImg } from "../styles/index.styled"

export default function IndexPage({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Wrapper>
        <h1>Hello! I'm Stephen </h1>
        <h2>I'm a full-stack developer from Manchester</h2>
        <p>
          I love learning new technologies and being creative, and I recently
          graduated from{" "}
          <a
            href="https://www.northcoders.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Northcoders
          </a>{" "}
          coding bootcamp.
        </p>
        <p>
          Outside of coding, I have a passion for making experimental music and art, and I enjoy cycling-touring and kayaking.
        </p>
        <StyledImg fluid={data.file.childImageSharp.fluid} />
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
