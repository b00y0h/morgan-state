import React, { useEffect, useState, useRef } from 'react'

import lottie from 'lottie-web'
import { Link } from 'gatsby'
import logoAnimation from '../assets/msu-logo-anim.json'

function Logo() {
  const pageUrl = typeof window !== 'undefined' ? window.location.href.indexOf('program') : ''

  if (pageUrl !== -1) {
    return <div className="logo">Morgan State University</div>
  }
  return <h1 className="logo">Morgan State University</h1>
}

const Head = () => (
  <header className="page-header">
    <Logo />
  </header>
)

export default Head
