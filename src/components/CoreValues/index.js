import React, { useState } from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const CoreValues = () => {
  const [coreValue, setCoreValue] = useState("leadership");
  return (
    <section className="coreValues">
      <nav className="valuesButtons">
        <button
          onClick={() => setCoreValue("leadership")}
          className={coreValue === "leadership" && "active"}
        >
          Leadership
        </button>

        <button
          onClick={() => setCoreValue("innovation")}
          className={coreValue === "innovation" && "active"}
        >
          Innovation
        </button>

        <button
          onClick={() => setCoreValue("integrity")}
          className={coreValue === "integrity" && "active"}
        >
          Integrity
        </button>

        <button
          onClick={() => setCoreValue("diversity")}
          className={coreValue === "diversity" && "active"}
        >
          Diversity
        </button>

        <button
          onClick={() => setCoreValue("excellence")}
          className={coreValue === "excellence" && "active"}
        >
          Excellence
        </button>

        <button
          onClick={() => setCoreValue("respect")}
          className={coreValue === "respect" && "active"}
        >
          Respect
        </button>
      </nav>

      <div className="coreValueContainer">
        {coreValue === "leadership" && (
          <>
            <StaticImage
              src="./../../assets/leadership.jpg"
              placeholder="Blurred"
              alt="Innovation image"
              layout="fullWidth"
              as="figure"
              height={500}
            />
            <div className="valueContent">
              <h3>Be a Leader</h3>
              <p className="description">
                In 2019, we produced the most Fullbright Scholars of any HBCU,
                and we continue to lead the way for awarding advanced degrees to
                African Americans.
              </p>
            </div>
          </>
        )}
        {coreValue === "innovation" && (
          <>
            <StaticImage
              src="./../../assets/innovation.jpg"
              placeholder="Blurred"
              alt="Innovation image"
              layout="fullWidth"
              as="figure"
            />
            <div className="valueContent">
              <h3>Be Creative</h3>
              <p className="description">
                With more than 50 academic programs leading to graduate degrees,
                you’ll get the chance to study your true passions.
              </p>
            </div>
          </>
        )}
        {coreValue === "integrity" && (
          <div>
            <StaticImage
              src="./../../assets/all-programs-hero.jpg"
              placeholder="Blurred"
              alt="Innovation image"
              layout="fullWidth"
              as="figure"
            />
            <div className="valueContent">
              <h3>Be Real</h3>
              <p className="description">
                With more than 50 academic programs leading to graduate degrees,
                you’ll get the chance to study your true passions.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoreValues;
