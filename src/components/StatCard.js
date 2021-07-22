import React from 'react'
import styled from '@emotion/styled'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { GatsbyImage as Img } from 'gatsby-plugin-image'

const RICHTEXT_OPTIONS = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a className="link" href={node.data.uri}>
        {children}
      </a>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.LIST_ITEM]: (node, children) => {
      const UnTaggedChildren = documentToReactComponents(node, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [BLOCKS.LIST_ITEM]: (node, children) => children,
        },
      })

      return <li>{UnTaggedChildren}</li>
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields
      const mimeType = file['en-US'].contentType
      const mimeGroup = mimeType.split('/')[0]
      switch (mimeGroup) {
        case 'image':
          return (
            <img
              title={title ? title['en-US'] : null}
              alt={description ? description['en-US'] : null}
              src={file['en-US'].url}
            />
          )
        default:
          return <span style={{ backgroundColor: 'red', color: 'white' }}> {mimeType} embedded asset </span>
      }
    },
  },
}

const StatCard = ({ statisticImage, title, description, ...props }) => (
  <>
    <li className={`col-30 ${statisticImage ? 'graphicStat' : 'textStat'}`}>
      {statisticImage && (
        <Img image={statisticImage.gatsbyImageData} alt={statisticImage.title} backgroundColor="#eeeeee" />
      )}
      <h3>{title}</h3>
      {description && (
        <div className="statDescription">{documentToReactComponents(description.json, RICHTEXT_OPTIONS)}</div>
      )}
    </li>
  </>
)

export default StatCard
