import React from 'react'
import Testimonial from 'components/Testimonial'

function TestimonialQuote({ data }) {
  // console.log('🗯 testimonial quote data: ', data)
  const { author, childContentfulTestimonialQuoteQuoteBlockTextNode, image } = data
  const { childMarkdownRemark } = childContentfulTestimonialQuoteQuoteBlockTextNode
  const { html } = childMarkdownRemark

  return <Testimonial className="testimonial" quote={html} author={author} image={image && image.gatsbyImage} />
}

export default TestimonialQuote
