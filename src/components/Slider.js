import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GatsbyImage as Img } from 'gatsby-plugin-image'

const ImageSlider = ({ data, settings }) => {
  const internalSettings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ...settings,
  }
  return (
    <Slider {...internalSettings}>
      {data.map((item) => (
        <div className="slick-slide" key={item.id}>
          {item.image && <Img image={item.image.gatsbyImageData} alt={item.image.title} />}
          <div className="slick-caption">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  )
}
export default ImageSlider
