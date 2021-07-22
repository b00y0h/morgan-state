import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const BgImg = styled(Img)`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Hero = ({ image }) => (
  <div className="hero">
    <BgImg fluid={image && image.fluid} />
  </div>
)

export default Hero
