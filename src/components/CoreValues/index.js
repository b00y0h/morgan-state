import React, { useState } from "react";
import Container from "../Container";
import ValueSlide from "./ValueSlide";
import ValueData from "./ValuesData";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const CoreValues = () => {
  const [coreValue, setCoreValue] = useState("leadership");

  return (
    <>
      <div className="valuesButtons">
        <nav>
          <button onClick={() => setCoreValue("leadership")}>Leadership</button>

          <button onClick={() => setCoreValue("innovation")}>Innovation</button>

          <button onClick={() => setCoreValue("integrity")}>Integrity</button>

          <button onClick={() => setCoreValue("diversity")}>Diversity</button>

          <button onClick={() => setCoreValue("excellence")}>Excellence</button>

          <button onClick={() => setCoreValue("respect")}>Respect</button>
        </nav>
      </div>
      <div>
        {coreValue === "leadership" && (
          <ValueSlide title="leadership" data={ValueData} />
        )}
        {coreValue === "innovation" && <ValueSlide title="innovation" />}
      </div>
      <ul className="no-list">
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
    </>
  );
};

export default CoreValues;
