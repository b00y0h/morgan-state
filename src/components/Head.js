import React, { useEffect, useState, useRef } from 'react'
import lottie from 'lottie-web'

import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks/use-site-metadata'

function Logo() {
  const pageUrl = window.location.href.indexOf('program')
  if (pageUrl != -1) {
    return <div className="logo">Morgan State University</div>
  } else {
    return <h1 className="logo">Morgan State University</h1>
  }
}

const Head = () => {
  const [offset, setOffset] = useState(0)
  const container = useRef(null)

  // useEffect(() => {
  //   window.onscroll = () => {
  //     setOffset(window.pageYOffset)
  //   }
  //   //   // console.log(offset)

  //   // return cleanUp=()=>{}
  // }, [])

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('./../assets/msu-logo-anim.json'),
    })
  }, [])

  return (
    <header className="page-header">
      <Logo />
      <div className="container" ref={container}></div>
    </header>
  )
}

export default Head
