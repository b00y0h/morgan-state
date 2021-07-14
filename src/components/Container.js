import React from 'react'

const FullWidthCont = props => {
  return <div className="wrapper fill-container">{props.children}</div>
}

const CenteredCont = props => {
  return <div className="wrapper centered">{props.children}</div>
}

const CenterNarrowCont = props => {
  return <div className="wrapper narrow">{props.children}</div>
}

const Container = props => {
  return (
    <>
      {props.constraints === 'narrow' ? (
        <CenterNarrowCont>{props.children}</CenterNarrowCont>
      ) : props.constraints === 'center' ? (
        <CenteredCont>{props.children}</CenteredCont>
      ) : (
        <FullWidthCont>{props.children}</FullWidthCont>
      )}
    </>
  )
}

export default Container
