import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <h1>
        Hello! I'm Stephen{" "}
        <span role="img" aria-label="sparkles emoji">
          ✨
        </span>
      </h1>
      <p>I'm a full-stack developer from Manchester.</p>
    </Layout>
  )
}
