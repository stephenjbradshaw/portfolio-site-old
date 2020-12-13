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
        <StyledTagline>I'm a Junior Developer from Manchester</StyledTagline>
        <StyledImg
          fluid={data.file.childImageSharp.fluid}
          alt="Stephen Bradshaw"
        />
        <p>
          I love learning new technologies and being creative, and I've recently
          started in my first dev role at the wonderful{" "}
          <a
            href="https://buildempire.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BuildEmpire
          </a>
          !
        </p>
        <p>
          Outside of coding, I have a passion for making experimental music and
          art, and I enjoy cycle-touring and kayaking.{" "}
          <span role="img" aria-label="bicycle emoji">
            🚲
          </span>{" "}
          <span role="img" aria-label="canoe emoji">
            🛶
          </span>{" "}
        </p>
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
