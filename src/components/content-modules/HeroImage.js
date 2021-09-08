import React from 'react'
import { GatsbyImage as Img } from 'gatsby-plugin-image'

function HeroImage({ data }) {
  const { heroImage } = data
  return (
    <div className="heroImage">
      <Img image={heroImage.gatsbyImageData} alt={heroImage.description || heroImage.title || 'Untitled Image'} />
    </div>
  )
}

export default HeroImage
