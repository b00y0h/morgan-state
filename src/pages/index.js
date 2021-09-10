import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Container from '../components/Container';
import ProgramPreview from '../components/ProgramPreview';
import '../styles/sass/styles.scss';
import CoreValues from '../components/CoreValues';

const ProgramIndex = ({ data }) => {
  const schools = data.allContentfulPartner.edges[0].node.school;
  const programs = data.allContentfulProgram.edges;
  console.log('schools 👩🏼‍🏫', schools);
  const filterUnwanted = (arr) => {
    const required = arr.filter((el) => el.program);
    return required;
  };
  // remove the schools that don't have any programs
  const filteredSchools = filterUnwanted(schools);
  // console.log('filtered 🤽🏼‍♂️', filterUnwanted(schools));
  return (
    <>
      <Layout className="allPrograms">
        <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} image="{ogImage}" />
        <div className="hero">
          <StaticImage src="./../assets/all-programs-hero.jpg" placeholder="blurred" alt="Morgan State Programs" />
          <div className="heroContent">
            <h1>Discover Graduate Programs at Morgan State</h1>
            <button type="submit">Request information</button>
          </div>
        </div>
        <Container constraints="center" className="page-intro">
          <h2>Growing the Future, Leading the World</h2>
          <p>
            The School of Graduate Studies at Morgan State University will prepare you to be competitive in the real
            world. If you’re looking for professors who care, a world-class education, and hands-on experiences that
            grow your career, Morgan State is it. From 1964 to now, we’ve created a community of high-achieving scholars
            that lead the way in research, service, and their careers.
          </p>
          <p>
            With our flexible, multidisciplinary programs in both STEM and non-STEM fields, we give students like you
            the foundation for success. You’ll collaborate closely with your professors and peers, all while gaining
            expertise in your field. Engage in impactful research, career-minded internships, and other rewarding
            learning opportunities that shape your future.
          </p>
          <p>
            Get the education you need for today’s most sought-after jobs and careers. At Morgan, we’ll support your
            growth and show you that the sky’s the limit.
          </p>
          <ul className="square">
            <li>Improve your skills</li>
            <li>Gain specialized knowledge</li>
            <li>Find success in your career</li>
            <li>Achieve your wildest dreams</li>
          </ul>
        </Container>
        <CoreValues />
        <Container id="programs">
          <div className="intro">
            <div className="wrapper centered">
              <h2>Find Your Graduate Program</h2>
              <p>
                With more than 50 programs leading to graduate degrees, you can study what really matters. Whether
                you’re pursuing an MA or MS, a specialized Master’s degree, or a PhD, a Morgan State education delivers
                results. Get the experience of a lifetime that combines academic enhancement with professional growth.
                Explore our wide range of graduate programs offered on campus and online.
              </p>
            </div>
          </div>
          <div id="programList" className="wrapper centered">
            {filteredSchools.map((school) => (
              <div className="programs" key={school.id}>
                <h3>{school.title}</h3>
                <ul className="no-list schoolProgramList">
                  <div className="listHead">
                    <span>Program</span>
                    <span>Degree</span>
                    <span>Learning Mode</span>
                  </div>
                  {school.program &&
                    school.program.map((program) => (
                      <li key={program.slug} className={`program ${program.slug}`}>
                        <ProgramPreview program={program} />
                      </li>
                    ))}
                </ul>
              </div>
            ))}
            {/* <h3>***** Programs that don't have a college associated yet *****</h3>
            <p>this is for dev work only so that you can see all the programs</p>
            <ul>
              {programs.map(({ node: program }) => {
                if (!program.relatedSchoolCollege) {
                  return (
                    <li key={program.slug}>
                      <ProgramPreview program={program} />
                    </li>
                  );
                }
              })}
            </ul> */}
          </div>
        </Container>
        <Container className="ctaSection">
          <div className="ctaContent narrow">
            <p>
              Take the next step in your academic and professional career with a graduate degree from Morgan State.{' '}
              <strong>Pursue your future&mdash;today.</strong>
            </p>
            <button type="submit">Request Information</button>
          </div>
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
            id
            title
            program {
              fullProgramName
              slug
              availableMethodsOfStudy
              typeOfDegree
            }
          }
        }
      }
    }

    allContentfulProgram(filter: { partner: { id: { eq: "2b6a7fff-8086-59de-8b43-a5491b1fca0f" } } }) {
      edges {
        node {
          fullProgramName
          slug
          availableMethodsOfStudy
          typeOfDegree
          relatedSchoolCollege {
            id
          }
        }
      }
    }
  }
`;
