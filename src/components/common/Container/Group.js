import React from 'react'

const Group = props => {
  return <div className={`group ${props.className}`}>{props.children}</div>
}

export default Group
