import React from 'react'
import { GatsbyImage as Img } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

const BgImg = styled(Img)`
  width: 100%;
  height: 100%;
`

const Hero = ({ image }) => (
  <div className="hero">{image && <BgImg image={image.gatsbyImageData} alt={image.title} />}</div>
)

export default Hero
