import React from 'react'

const Container = props => {
  return (
    <>
      <section
        id={props.id}
        className={`
      ${
        props.constraints === 'center'
          ? 'wrapper centered'
          : props.constraints === 'narrow'
          ? 'wrapper narrow'
          : 'wrapper'
      }
    ${props.className ? props.className : ''}
    `}
      >
        {props.children}
      </section>
    </>
  )
}

export default Container
