import React from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

export default function SEO({ description, image, title }) {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
              description
              image
              siteUrl
            }
          }
        }
      `}
      render={(data) => {
        const defaultImage = data.site.siteMetadata.siteUrl + data.site.siteMetadata.image;
        const metaDescription = description || data.site.siteMetadata.description;
        const metaImage = image || defaultImage;
        // console.log('🚀 data: ', data);

        return (
          <Helmet
            htmlAttributes={{
              lang: `en`,
            }}
            title={title}
            defaultTitle={data.site.siteMetadata.title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          >
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* General tags */}
            <meta name="image" content={image} />
            <meta name="description" content={metaDescription} />

            {/* OpenGraph tags */}
            <meta property="og:title" content={title} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:description" content={metaDescription} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:image" content={metaImage} />
            <meta name="twitter:description" content={metaDescription} />
          </Helmet>
        );
      }}
    />
  );
}
