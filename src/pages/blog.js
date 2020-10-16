import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AllPosts from "../components/all-blog-posts"

export default function Blog({ data }) {
  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO title="All posts" />
      <h1>Blog posts</h1>
      <AllPosts posts={posts} />
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
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredImageAlt
          }
        }
      }
    }
  }
`
