import React from 'react';

import getContentfulModules from 'utils/getContentfulModules';
import { Column } from 'components/StyledComponents/Column';
import { Row } from 'components/StyledComponents/Row';

function TwoColumn({ data }) {
  // console.log('⭐⭐ two column data: ', data)
  const { section1, section2 } = data;
  return (
    <Row className="row row-twoColumn">
      <Column className="firstColumn">{section1 && getContentfulModules(section1)}</Column>
      <Column className="secondColumn">{section2 && getContentfulModules(section2)}</Column>
    </Row>
  );
}

export default TwoColumn;
