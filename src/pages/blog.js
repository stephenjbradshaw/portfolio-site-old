import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import AllPosts from "../components/all-blog-posts"

import { rhythm } from "../utils/typography"

export default function Blog({ data }) {
  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO title="All posts" />
      <h1>Blog posts</h1>
      <AllPosts posts={posts} />
      <Link to="/">
        <Button marginTop="85px">Go Home</Button>
      </Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
