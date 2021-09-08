import React from 'react';

import getContentfulModules from 'utils/getContentfulModules';

import { Column } from 'components/StyledComponents/Column';
import { Row } from 'components/StyledComponents/Row';

function ThreeColumn({ data }) {
  // console.log('⭐⭐⭐ three column data: ', data)
  const { section1, section2, section3 } = data;
  return (
    <Row className="row row-threeColumn">
      <Column className="firstColumn">{section1 && getContentfulModules(section1)}</Column>
      <Column className="secondColumn">{section2 && getContentfulModules(section2)}</Column>
      <Column className="thirdColumn">{section2 && getContentfulModules(section3)}</Column>
    </Row>
  );
}

export default ThreeColumn;
