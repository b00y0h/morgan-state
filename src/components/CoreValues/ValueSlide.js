import React from "react";
import { GatsbyImage as Img } from "gatsby-plugin-image";

const ValueSlide = ({ data }) => {
  return (
    <div className="coreValue">
      {data[0].map((item) => (
        <>
          {/* <GatsbyImage
            src="./../assets/leadership.jpg"
            placeholder="Blurred"
            alt="Innovation image"
            layout="fullWidth"
            as="figure"
          /> */}
          <Img
            image="./../../../assets/leadership.jpg"
            className="discoverBgImg"
            alt={item.title}
          />
          <p>the image</p>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </>
        // <div className="valueDescription">
        //   <p>
        //     Our nearly 54,000 degree graduates make up a passionate alumni network
        //     that spans across the US and beyond.
        //   </p>
        // </div>
      ))}
    </div>
  );
};

export default ValueSlide;
