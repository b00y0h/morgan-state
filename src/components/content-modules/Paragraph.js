import React from 'react'

function Paragraph({ data }) {
  const { html } = data.childContentfulParagraphParagraphTextNode.childMarkdownRemark
  return (
    <div
      className="textSection"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  )
}

export default Paragraph
