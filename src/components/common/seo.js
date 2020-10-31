import React from "react";
import { Helmet } from "react-helmet";

import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description, keywords, title, image, url, author }) => {
  const {
    site: {
      siteMetadata: {
        title: titleMeta,
        siteUrl: urlMeta,
        description: descriptionMeta,
        image: imageMeta,
        author: authorMeta,
        keywords: keywordsMeta,
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
          author
          image
          keywords
        }
      }
    }
  `);

  description = description || descriptionMeta;
  title = title ? `${title} – ${titleMeta}` : titleMeta;
  url = url || urlMeta;
  image = image || imageMeta;
  author = author || authorMeta;
  keywords = keywords || keywordsMeta;

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: image,
        },
      ].concat(
        keywords && keywords.length > 0
          ? [
              {
                name: `keywords`,
                content: keywords.join(", "),
              },
            ]
          : []
      )}
    >
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
