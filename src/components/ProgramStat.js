import React from 'react';

const ProgramStat = ({ stat, description }) => (
  <div className="programStat">
    <span>{stat}</span>
    {description}
  </div>
);

export default ProgramStat;
