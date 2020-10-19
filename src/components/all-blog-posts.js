import React from "react"

import {
  PostsList,
  Post,
  StyledLink,
  StyledImage,
  Section,
  Title,
  Description,
  Date,
} from "../styles/all-blog-posts.styled"

export default function AllPosts({ posts }) {
  return (
    <PostsList>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const featuredImage = node.frontmatter.featuredImage

        return (
          <Post key={node.fields.slug}>
            <StyledLink to={`/blog${node.fields.slug}`}>
              {featuredImage && (
                <StyledImage fluid={featuredImage.childImageSharp.fluid} />
              )}
              <Section>
                <Title>{title}</Title>

                <Description
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <Date>{node.frontmatter.date}</Date>
              </Section>
            </StyledLink>
          </Post>
        )
      })}
    </PostsList>
  )
}
