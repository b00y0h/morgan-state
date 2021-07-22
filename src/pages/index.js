import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Container from '../components/Container'
import ProgramPreview from '../components/ProgramPreview'
import '../styles/sass/styles.scss'
import Img from 'gatsby-image'
import AllProgramsHero from './../assets/all-programs-hero.jpg'

const ProgramIndex = ({ data }) => {
  const schools = data.allContentfulPartner.edges[0].node.school
  const programs = data.allContentfulProgram.edges

  return (
    <>
      <Layout className="allPrograms">
        <SEO
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          image="{ogImage}"
        />
        <div className="hero">
          <img src={`${AllProgramsHero}`} />
          <div className="heroContent">
            <h2>Discover Graduate Programs at Morgan State</h2>
            <button>Request information</button>
          </div>
        </div>
        <Container>
          <h2>Move Forward in Your Professional Career</h2>
        </Container>
        <Container data={data} schools={schools}>
          {schools.map(school => (
            <>
              <h2>{school.title}</h2>
              {school.program &&
                school.program.map(program => {
                  return (
                    <li key={program.slug}>
                      <ProgramPreview program={program} />
                    </li>
                  )
                })}
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
              )
            }
          })}
        </Container>
      </Layout>
    </>
  )
}

export default ProgramIndex

export const pageQuery = graphql`
  query ProgramIndexQuery {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulPartner(
      filter: { id: { eq: "ecd6a28f-36c2-5596-a5f1-e03afa6e09ed" } }
    ) {
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
`
