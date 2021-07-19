import React from 'react'

const CardList = props => {
  return <ul className={`statsList ${props.rows}`}>{props.children}</ul>
}

export default CardList
