import React from 'react'

const Headline = ({ data }) => {
  if (!data) return null
  return <div className="headline">{data}</div>
}

const Paragraph = ({ data }) => {
  if (!data) return null
  return <div className="textSection" dangerouslySetInnerHTML={{ __html: data.childMarkdownRemark.html }} />
}

function ParagraphWithHeadline({ data }) {
  const { childContentfulParagraphWithHeadlineParagraphTextNode, headline } = data

  return (
    <div className="paragraphWithHeadline">
      <Headline data={headline} />
      <Paragraph data={childContentfulParagraphWithHeadlineParagraphTextNode} />
    </div>
  )
}

export default ParagraphWithHeadline
