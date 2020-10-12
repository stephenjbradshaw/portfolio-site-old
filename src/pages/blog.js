import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import SearchPosts from "../components/searchPosts"

export default function Blog({ data, navigate, location }) {
  const posts = data.allMdx.edges
  const localSearchBlog = data.localSearchBlog

  return (
    <Layout>
      <SEO title="All posts" />
      <h1>Blog posts</h1>
      <SearchPosts
        posts={posts}
        localSearchBlog={localSearchBlog}
        navigate={navigate}
        location={location}
      />
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
    localSearchBlog {
      index
      store
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
