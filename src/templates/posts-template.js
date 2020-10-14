import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/common/layout"
import styles from "./posts-template.module.scss"

const PostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const author = pageContext.author

  return (
    <Layout>
      <div className={styles.container}>
        <article className={styles.article}>
          <header>
            <h1>{post.frontmatter.title}</h1>
            <p className={styles.date}>DATE {post.frontmatter.date}</p>
          </header>
          <Img
            fluid={post.frontmatter.illustration.childImageSharp.fluid}
            alt={post.frontmatter.title}
          />
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <div className={styles.author}>-{author.name}</div>
        </article>
      </div>
    </Layout>
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
      html
      frontmatter {
        date(formatString: "DD.MM.YY")
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
