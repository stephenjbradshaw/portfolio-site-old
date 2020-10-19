import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default function IndexPage({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <h1>Hello! I'm Stephen </h1>
      <p>I'm a full-stack developer from Manchester.</p>
      <Img fixed={data.file.childImageSharp.fixed} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    file(relativePath: { eq: "headshot-circle.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
