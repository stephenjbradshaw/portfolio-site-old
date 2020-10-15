import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const PostsList = styled.ul`
  margin: 20px 0px 40px;
  list-style-type: none;
`

export default function AllPosts({ posts }) {
  return (
    <PostsList>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const featuredImage = node.frontmatter.featuredImage
        console.dir(node)

        return (
          <li key={node.fields.slug}>
            {featuredImage && <Image fluid={featuredImage.childImageSharp.fluid} />}
            <h3>
              <Link to={`/blog${node.fields.slug}`}>{title}</Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </li>
        )
      })}
    </PostsList>
  )
}
