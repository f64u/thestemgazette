import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import styles from "./posts-template.module.scss";

import { parse, format } from "date-fns";

import config from "../../data/SiteConfig";
import { Helmet } from "react-helmet";
const PostTemplate = ({ data, pageContext }) => {
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  const { slug, author } = pageContext;

  if (!post.id) {
    post.id = slug;
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postAuthor={author} postSEO />
      <div className={styles.container}>
        <article className={styles.article}>
          <header>
            <h1>{post.title}</h1>
            <p className={styles.date}>
              DATE{" "}
              {format(
                parse(post.date, config.dateFromFormat, new Date()),
                config.dateFormat
              )}
            </p>
          </header>
          <Img
            fluid={post.illustration.childImageSharp.fluid}
            alt={post.title}
          />
          <section
            dangerouslySetInnerHTML={{ __html: postNode.html }}
            itemProp="articleBody"
          />
          <div className={styles.author}>-{author.name}</div>
        </article>
      </div>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date
        description
        title
        illustration {
          publicURL
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
`;
