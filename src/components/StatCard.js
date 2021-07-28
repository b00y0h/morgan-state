import React from "react";
import { Link as GatsbyLink } from "gatsby";

import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { GatsbyImage as Img } from "gatsby-plugin-image";

// TODO: I think the answer lies somewhere here. https://www.contentful.com/blog/2021/04/14/rendering-linked-assets-entries-in-contentful/

const RICHTEXT_OPTIONS = {
  renderNode: {
    // [INLINES.ENTRY_HYPERLINK]: ({ data }) => <Link to="/">{console.log(data)}</Link>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    // [BLOCKS.EMBEDDED_ASSET]: ({ data }) => <Img image={data.target.gatsbyImageData} alt={data.target.title} />,
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <a href={data.uri} target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
    [INLINES.ENTRY_HYPERLINK]: ({ data }, children) => (
      <GatsbyLink to={data.target?.slug}>{children}</GatsbyLink>
    ),
  },
};

const StatCard = ({ statisticImage, title, description, ...props }) => (
  <>
    <li className={`col-30 ${statisticImage ? "graphicStat" : "textStat"}`}>
      {statisticImage && (
        <Img
          image={statisticImage.gatsbyImageData}
          alt={statisticImage.title}
        />
      )}
      <h3>{title}</h3>
      {description && (
        <div className="statDescription">
          {renderRichText(description, RICHTEXT_OPTIONS)}
        </div>
      )}
    </li>
  </>
);

export default StatCard;
