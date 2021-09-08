import React from 'react'
import { GatsbyImage as Img } from 'gatsby-plugin-image'

function ImageWithCaption({ data }) {
  const { image, caption } = data
  return (
    <figure className="imageWithCaption">
      <Img image={image.gatsbyImageData} alt={image.description || image.title || 'Untitled Image'} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default ImageWithCaption
