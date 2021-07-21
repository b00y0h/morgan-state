import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ImageSlider = ({ data, settings, className }) => {
  const internalSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
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
    <Slider className={className} {...internalSettings}>
      {data.map(item => {
        return (
          <div className="slick-slide-content" key={item.id}>
            {item.src && <img src={item.src.fluid.src} alt={item.title} />}
            <div className="slick-caption">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        )
      })}
    </Slider>
  )
}
export default ImageSlider
