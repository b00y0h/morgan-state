import React from 'react'

// parse out the extra text node and return if it exists
const CTAText = ({ data }) => {
  if (!data) return null
  return <div className="ctaText" dangerouslySetInnerHTML={{ __html: data.childMarkdownRemark.html }} />
}

function CallToAction({ data }) {
  const { childContentfulCallToActionCtaTextTextNode, buttonText } = data

  function handleClick(path) {
    // history.push(path)
  }
  return (
    <>
      <CTAText data={childContentfulCallToActionCtaTextTextNode} />
      <button type="button" className="btn btn-primary" onClick={() => handleClick(data.link)}>
        {buttonText}
      </button>
    </>
  )
}

export default CallToAction
