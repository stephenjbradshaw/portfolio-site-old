import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function AllPosts({ posts }) {
  return (
    <PostsList>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <li key={node.fields.slug}>
            <h3>
              <Link
                style={{ boxShadow: `none` }}
                to={`/blog${node.fields.slug}`}
              >
                {title}
              </Link>
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

const PostsList = styled.ul`
  margin: 20px 0px 40px;
  list-style-type: none;
`

