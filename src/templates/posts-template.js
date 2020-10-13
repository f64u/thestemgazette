import React, { useContext } from "react"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"

const PostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <article>
      <header>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
      </header>
      <Img
        fluid={post.frontmatter.illustration.childImageSharp.fluid}
        alt={post.frontmatter.title}
      />
      <span>--</span>
      <span>{post.frontmatter.description}</span>{" "}
    </article>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        title
        illustration {
          childImageSharp {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
