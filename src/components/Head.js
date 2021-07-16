import React, { useEffect, useState } from 'react'

import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { container } from 'webpack'

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

  // useEffect(() => {
  //   window.onscroll = () => {
  //     setOffset(window.pageYOffset)
  //   }
  //   //   // console.log(offset)

  //   // return cleanUp=()=>{}
  // }, [])

  return (
    <header className="page-header">
      <Logo />
      <div className="container" ref="container">
        test
      </div>
    </header>
  )
}

export default Head
