import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"

export default function Footer({ className }) {
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <footer className={className}>
            <section className={"social"}>
              <a
                href={`https://github.com/${social.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href={`https://linkedin.com/in/${social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </section>
            <p>
              © Built with ♥ by Stephen Bradshaw, {new Date().getFullYear()}
            </p>
            <p>
              Source code on{" "}
              <a
                href="https://github.com/stephenjbradshaw/portfolio-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
          </footer>
        )
      }}
    />
  )
}

const footerQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          github
          linkedin
        }
      }
    }
  }
`
