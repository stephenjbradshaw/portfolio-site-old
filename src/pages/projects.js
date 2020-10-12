import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Contact({ data }) {
  const { social } = data.site.siteMetadata

  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <h1>Projects</h1>
      <p>
        Coming soon! For now, take a look at my{" "}
        <a href={`https://www.github.com/${social.github}`}>
          projects on github
        </a>
        .
      </p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          github
        }
      }
    }
  }
`
