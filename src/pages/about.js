import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper, StyledImg } from "../styles/about.styled.js"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <Layout>
      <SEO title="About" keywords={[`about`, `bio`, `skills`]} />
      <Wrapper>
        <h1>About Me</h1>
        <StyledImg
          fluid={data.file.childImageSharp.fluid}
          alt="Stephen Bradshaw"
        />
        <h2>What am I doing now?</h2>
        <p>
          I'm a developer at{" "}
          <a
            href="https://thirst.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            thirst.io
          </a>{" "}
          in Manchester. I'm part of a team of JavaScript developers building
          thirst, a modern social, learning platform, built around an AI-based
          recommendation engine. I enjoy working both on our back end (AWS) and
          front end (React), but I'm particularly passionate about UX and web
          accessibility – helping to make thirst intuitive and easy-to-use for
          all.
        </p>

        <h2>What's my background?</h2>
        <p>
          I have a masters degree in music <strong>composition</strong>. My
          composition practice is tech-heavy, often involving creating new{" "}
          digital musical instruments and{" "}
          <strong>interactive installations</strong>. I regularly perform as a{" "}
          <strong>violinist</strong> and I have also been a producer / project
          manager for arts events.
        </p>
        <h2>Tech</h2>
        <ul>
          <li>
            <strong>Languages: </strong>JavaScript, Python,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Max_(software)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Max/MSP
            </a>{" "}
          </li>

          <li>
            <strong>Front end: </strong>React, Gatsby, GraphQL
          </li>
          <li>
            <strong>Back end: </strong>Amazon Web Services (AWS), Node.js,
            express
          </li>
          <li>
            <strong>Testing: </strong>Jest, React Testing Library
          </li>
        </ul>
        <p>
          If you'd like to chat, feel free to{" "}
          <a href="/contact">get in touch!</a>
        </p>
        <ul>
          <li></li>
        </ul>
      </Wrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "full-length.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
