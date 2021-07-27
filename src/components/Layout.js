import React from 'react'
import styled from '@emotion/styled'
import Head from './Head'
import Footer from './Footer'
// import { globalStyles } from '../styles/globalStyles.js'
import 'styles/sass/styles.scss'

const Skip = styled.a`
  font-family: ${(props) => props.theme.fonts.body};
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`

const Layout = props => {
  return (
    <>
      <div className={`siteContent ${props.className}`}>
        <Skip href="#main" id="skip-navigation">
          Skip to content
        </Skip>
        <Head />
        <main id="main" role="main">
          {props.children}
        </main>
      </div>
      <Footer />
      {/* <Global styles={globalStyles} /> */}
    </>
  )
}

export default Layout
