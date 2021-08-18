import React from 'react';
import { Link } from 'gatsby';

export default ({ program }) => {
  const slug = `/program/${program.slug}` || '/';
  const { fullProgramName, availableMethodsOfStudy, typeOfDegree } = program;
  return (
    <div className="container">
      <h4>
        <Link to={slug}>
          <span>{fullProgramName}</span>
        </Link>
      </h4>
      <p className="typeOfDegree">{typeOfDegree}</p>
      <p className="methodOfStudy">
        {availableMethodsOfStudy && availableMethodsOfStudy.map((tag) => <span key={tag}>{tag}</span>)}
      </p>
    </div>
  );
};
