import React from 'react'

const ProgramStat = props => {
  return (
    <div className="programStat">
      <span>{props.stat}</span>
      {props.description}
    </div>
  )
}

export default ProgramStat
