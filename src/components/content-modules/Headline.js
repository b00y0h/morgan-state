import React from 'react'

// parse out the extra text node and return if it exists
const Head = ({ data }) => {
  if (!data) return null
  return <div className="headline" dangerouslySetInnerHTML={{ __html: data.childMarkdownRemark.html }} />
}

const SubHead = ({ data }) => {
  if (!data) return null
  return <div className="subHeadline" dangerouslySetInnerHTML={{ __html: data.childMarkdownRemark.html }} />
}

function Headline({ data }) {
  const { childContentfulHeadlineHeadlineTextNode, childContentfulHeadlineSubHeadlineTextNode } = data

  return (
    <>
      <Head data={childContentfulHeadlineHeadlineTextNode} />
      <SubHead data={childContentfulHeadlineSubHeadlineTextNode} />
    </>
  )
}

export default Headline
