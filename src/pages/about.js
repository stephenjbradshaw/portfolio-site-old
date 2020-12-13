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
          I'm currently a Junior Developer at{" "}
          <a
            href="https://buildempire.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BuildEmpire
          </a>{" "}
          in Manchester. I'm really excited to be continuing my dev journey as
          part of the team there, and I'm enjoying the challenge of using some
          unfamiliar technologies as part of an exciting full-stack project.
        </p>

        <h2>Tech Stack</h2>
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
            <strong>Frameworks: </strong> React, AWS Amplify, Gatsby
          </li>
          <li>
            <strong>Front end: </strong>GraphQL, Styled Components, HTML5, CSS3,
            SCSS
          </li>
          <li>
            <strong>Back end: </strong>RESTful APIs using Node.js, Express,
            PostgreSQL
          </li>
          <li>
            <strong>Testing: </strong>Jest, React Testing Library
          </li>
          <li>
            <strong>Other: </strong> Adobe CC, Figma, Arduino & basic
            electronics
          </li>
        </ul>
        <h2>What's my background?</h2>
        <p>
          I have a masters degree in music composition, and before retraining as
          a developer at{" "}
          <a
            href="https://northcoders.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Northcoders
          </a>{" "}
          I was pursuing a portfolio career in the arts. My artistic practice is
          tech-heavy, often involving creating{" "}
          <strong> new software instruments</strong> and{" "}
          <strong>custom hardware</strong>. I found that I really enjoyed this
          aspect of my work, and when Covid hit I decided to pivot and develop
          my tech skills full-time.
        </p>
        <p>
          I also have professional experience as a{" "}
          <strong>producer & project manager</strong> for arts events, and as a{" "}
          <strong>violin tutor</strong> – experiences that have provided me with
          transferable skills in <strong>organisation</strong>,{" "}
          <strong>communication</strong>, and the{" "}
          <strong>ability to break down problems</strong>.
        </p>
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
