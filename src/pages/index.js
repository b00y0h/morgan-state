import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Container from "../components/Container";
import ProgramPreview from "../components/ProgramPreview";
import "../styles/sass/styles.scss";
import { StaticImage } from "gatsby-plugin-image";
import CoreValues from "../components/CoreValues";

const ProgramIndex = ({ data }) => {
  const schools = data.allContentfulPartner.edges[0].node.school;
  const programs = data.allContentfulProgram.edges;

  return (
    <>
      <Layout className="allPrograms">
        <SEO
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          image="{ogImage}"
        />
        <div className="hero">
          {/* <img src={`${AllProgramsHero}`} /> */}
          <StaticImage
            src="./../assets/all-programs-hero.jpg"
            layout="fullWidth"
            placeholder="blurred"
          />
          <div className="heroContent">
            <h1>Discover Graduate Programs at Morgan State</h1>
            <button>Request information</button>
          </div>
        </div>
        <Container constraints="center" className="intro">
          <h2>Move Forward in Your Professional Career</h2>
          <p>
            Id non pellentesque ante eu mi lacus in fermentum. Vestibulum ante
            consequat, volutpat a lorem. Aliquet lectus velit tincidunt et
            etiam. Enim at egestas tristique purus adipiscing ut. Adipiscing
            varius sapien blandit ultrices scelerisque vestibulum. Consequat
            vitae habitasse consectetur vitae maecenas. Felis, sed fermentum
            varius integer augue libero turpis eget tristique. Morbi eget porta
            porttitor cursus eu nunc bibendum.
          </p>
          <p>
            Vestibulum ante consequat, volutpat a lorem. Aliquet lectus velit
            tincidunt et etiam. Enim at egestas tristique purus adipiscing ut.
            Adipiscing varius sapien blandit ultrices scelerisque vestibulum.
            Consequat vitae habitasse consectetur vitae maecenas. Felis, sed
            fermentum varius integer augue libero turpis eget tristique. Morbi
            eget porta porttitor cursus eu nunc bibendum.{" "}
          </p>
          <ul className="square">
            <li>
              Commited to excellence in teaching, research, and service
              <ul className="circle">
                <li>Preeminent public urban research university</li>
                <li>Doctoral research institution since 2007</li>
              </ul>
            </li>
            <li>
              Preparing students to be competitive for real world success
              <ul className="circle">
                <li>Academics fostering a community of scholars</li>
                <li>Hands-on experiences for professional growth</li>
              </ul>
            </li>
            <li>Impacting the larger urban community</li>
          </ul>
        </Container>
        <CoreValues />
        <Container data={data} schools={schools}>
          {schools.map((school) => (
            <>
              <h2>{school.title}</h2>
              {school.program &&
                school.program.map((program) => (
                  <li key={program.slug}>
                    <ProgramPreview program={program} />
                  </li>
                ))}
            </>
          ))}
          <h2>***** Programs that don't have a college associated yet *****</h2>
          <p>this is for dev work only so that you can see all the programs</p>
          {programs.map(({ node: program }) => {
            if (!program.relatedSchoolCollege) {
              return (
                <li key={program.slug}>
                  <ProgramPreview program={program} />
                </li>
              );
            }
          })}
        </Container>
      </Layout>
    </>
  );
};

export default ProgramIndex;

export const pageQuery = graphql`
  query ProgramIndexQuery {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulPartner(filter: { id: {}, name: { eq: "Morgan State" } }) {
      edges {
        node {
          name
          id
          school {
            title
            program {
              fullProgramName
              slug
              availableMethodsOfStudy
            }
          }
        }
      }
    }

    allContentfulProgram(
      filter: {
        partner: { id: { eq: "ecd6a28f-36c2-5596-a5f1-e03afa6e09ed" } }
      }
    ) {
      edges {
        node {
          fullProgramName
          slug
          availableMethodsOfStudy
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          relatedSchoolCollege {
            id
          }
        }
      }
    }
  }
`;
