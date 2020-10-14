import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Date = styled.p`
  display: block;
  margin-bottom: 20px;
  margin-top: 20px;
`

const Title = styled.h1``

const Separator = styled.hr`
  margin-bottom: 20px;
`

const NavLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

export default function BlogPostTemplate({ data, pageContext }) {
  const post = data.mdx
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Title>{post.frontmatter.title}</Title>
      <Date>{post.frontmatter.date}</Date>
      <MDXRenderer>{post.body}</MDXRenderer>
      <Separator />
      <Bio />
      <NavLinks>
        <li>
          {previous && (
            <Link to={`/blog${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`/blog${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </NavLinks>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
