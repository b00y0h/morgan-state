import React from 'react';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

const StatImage = ({ data }) => {
  if (!data) return null;
  return (
    <Img className="statImage" image={data.gatsbyImageData} alt={data.description || data.title || 'Untitled Image'} />
  );
};

const StatText = ({ data }) => {
  if (!data) return null;
  return <span className="statText" dangerouslySetInnerHTML={{ __html: data.childMarkdownRemark.html }} />;
};

const StatSource = ({ data }) => {
  if (!data) return null;
  return <p className="statSource">{data}</p>;
};

function StatBlock({ data }) {
  console.log('data in statblock', data);
  const { source, statisticImage, statistic } = data;
  return (
    <li className={`col-30 ${statisticImage ? 'graphicStat' : 'textStat'}`}>
      <div className="statBlock">
        <StatImage data={statisticImage} />
        <StatText data={statistic} />
        <StatSource data={source} />
      </div>
    </li>
  );
}

export default StatBlock;
