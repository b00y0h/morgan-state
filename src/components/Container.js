import React from 'react'

const FullWidthCont = props => {
  return (
    <section id={props.id} className="wrapper fill-container">
      {props.children}
    </section>
  )
}

const CenteredCont = props => {
  return (
    <section id={props.id} className="wrapper centered">
      {props.children}
    </section>
  )
}

const CenterNarrowCont = props => {
  return (
    <section id={props.id} className="wrapper narrow">
      {props.children}
    </section>
  )
}

const Container = props => {
  return (
    <>
      {props.constraints === 'narrow' ? (
        <CenterNarrowCont id={props.id}>{props.children}</CenterNarrowCont>
      ) : props.constraints === 'center' ? (
        <CenteredCont id={props.id}>{props.children}</CenteredCont>
      ) : (
        <FullWidthCont id={props.id}>{props.children}</FullWidthCont>
      )}
    </>
  )
}

export default Container
