import React from 'react'

const Container = props => {
  if (props.constraints === 'fill-container') {
    return <div className="wrapper fill-container">{props.children}</div>
  } else if (props.constraints === 'centered') {
    return <div className="wrapper centered">{props.children}</div>
  } else {
    return <div className="wrapper">{props.children}</div>
  }
}

export default Container
