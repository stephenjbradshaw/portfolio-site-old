import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <h2>Get in touch if you'd like to chat!</h2>
      <p>
        <a href="mailto:hello@stephenbradshaw.dev">hello@stephenbradshaw.dev</a>
      </p>
    </Layout>
  )
}
