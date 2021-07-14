import React from 'react'

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
  return (
    <header className="page-header">
      <Logo />
    </header>
  )
}

export default Head
