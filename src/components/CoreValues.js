import React from "react";
import Container from "./Container";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

const CoreValues = () => {
  const valueImage2 = getImage("./../assets/innovation.jpg");
  return (
    <Container id="corevalues" className="coreValues">
      <ul className="no-list">
        <li>
          <StaticImage
            src="./../assets/leadership.jpg"
            placeholder="Blurred"
            alt="Leadership image"
            layout="fullWidth"
            as="figure"
          />

          <h3>Leadership</h3>
          <div className="valueDescription">
            <p>
              Our nearly 54,000 degree graduates make up a passionate alumni
              network that spans across the US and beyond.
            </p>
          </div>
        </li>
        <li>
          <StaticImage
            src="./../assets/innovation.jpg"
            placeholder="Blurred"
            alt="Innovation image"
            layout="fullWidth"
            as="figure"
          />
          <h3>Innovation</h3>
          <div className="valueDescription">
            <p>
              With more than 50 academic programs leading to graduate degrees,
              you’ll get the chance to study your true passions.
            </p>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default CoreValues;
