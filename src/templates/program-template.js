import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import '@brainhubeu/react-carousel/lib/style.css'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
// import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import SEO from '../components/SEO'
import Card from '../components/Card'
import CardList from '../components/CardList'
import Testimonial from '../components/Testimonial'
import ImageSlider from '../components/Slider'

import ProgramStat from '../components/ProgramStat'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import StatCard from '../components/StatCard'
import { Button } from '@theme-ui/components'
import Group from '../components/common/Container/Group'

const carouselSettings = {
  dot: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: 'linear',
}

const carouselSettings2 = {
  dot: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: 'linear',
}

const RICHTEXT_OPTIONS = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a className="link" href={node.data.uri}>
          {children}
        </a>
      )
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p>{children}</p>
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      const UnTaggedChildren = documentToReactComponents(node, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [BLOCKS.LIST_ITEM]: (node, children) => children,
        },
      })

      return <li>{UnTaggedChildren}</li>
    },
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { title, description, file } = node.data.target.fields
      const mimeType = file['en-US'].contentType
      const mimeGroup = mimeType.split('/')[0]
      switch (mimeGroup) {
        case 'image':
          return (
            <img
              title={title ? title['en-US'] : null}
              alt={description ? description['en-US'] : null}
              src={file['en-US'].url}
            />
          )
        default:
          return (
            <span style={{ backgroundColor: 'red', color: 'white' }}>
              {' '}
              {mimeType} embedded asset{' '}
            </span>
          )
      }
    },
  },
}

const ProgramTemplate = ({ data, pageContext }) => {
  const {
    title,
    metaDescription,
    heroImage,
    tags,
    fullProgramName,
    description,
    availableMethodsOfStudy,
    creditHours,
    monthsToComplete,
    programTracks,
    typeOfDegree,
    whyMorganStateStats,
    relatedSchoolCollege,
    programDetailUrl,
    preContentBlock,
    skillsAndJobs,
    careerDetails,
    carouselPreText,
    testimonialPreText,
    carouselContent,
    testimonial,
    financialAidOptions,
    relatedPrograms,
  } = data.contentfulProgram
  const previous = pageContext.prev
  const next = pageContext.next
  const { basePath } = pageContext

  let ogImage
  try {
    ogImage = heroImage.ogimg.src
  } catch (error) {
    ogImage = null
  }

  const normalizedCarousel =
    carouselContent &&
    carouselContent.map(item => ({
      id: item.id,
      title: item.title,
      src: item.image,
      description: item.description,
    }))

  const normalizedRelated =
    relatedPrograms &&
    relatedPrograms.map(item => ({
      id: item.id,
      title: item.fullProgramName,
      src: item.heroImage,
      description: item.metaDescription
        ? item.metaDescription.metaDescription
        : null,
    }))

  return (
    <Layout>
      <SEO
        title={title}
        description={
          metaDescription ? metaDescription.metaDescription : 'Title Needed'
        }
        image={ogImage}
      />
      <Hero title={title} image={heroImage} />

      {tags && <TagList tags={tags} basePath={basePath} />}
      <Container id="programDetails" constraints="narrow">
        <h1>
          {typeOfDegree} in {fullProgramName}
        </h1>
        <div className="learningMode">
          <p>Learning Mode:</p>
          <ul className="no-list">
            {availableMethodsOfStudy &&
              availableMethodsOfStudy.map(method => (
                <>
                  <li key={method}>{method}</li>
                </>
              ))}
          </ul>
        </div>
        <div className="programIntro">
          <p>
            Sit in molestie facilisis quisque nisl. Elementum sed ut sed risus
            porttitor. Quis volutpat viverra lacus leo pellentesque. Diam
            integer massa molestie in. Morbi neque a, praesent eros, mi iaculis
            a magna. Commodo, ipsum pretium donec condimentum nulla non vitae
            enim. Ipsum tellus imperdiet arcu nec, mattis elit est integer.
            Eleifend egestas orci, vivamus diam massa enim consequat, non augue.
            Volutpat et sodales vestibulum placerat.
          </p>
        </div>
        <div className="programStats">
          {creditHours && (
            <ProgramStat stat={creditHours} description="Credit Hours" />
          )}
          {monthsToComplete && (
            <ProgramStat
              stat={monthsToComplete}
              description="Months to Complete"
            />
          )}
          {programTracks && (
            <ProgramStat stat={programTracks} description="Program Tracks" />
          )}
        </div>
      </Container>
      <Container id="requestInfoCta">
        <div className="ctaContent narrow">
          <p>
            In enim sem orci adipiscing cras tempus.{' '}
            <strong>
              Malesuada odio egestas aliquet sed neque lectus cras.
            </strong>
          </p>
          <button>Request Information</button>
        </div>
      </Container>
      <Container className="cols" constraints="center">
        <Group className="programDescription cols">
          {description &&
            documentToReactComponents(description.json, RICHTEXT_OPTIONS)}
        </Group>
      </Container>
      <Container id="whyMorganState" className="drkbg">
        <Container constraints="center">
          <h2>Why Morgan State?</h2>
          <CardList>
            {whyMorganStateStats &&
              whyMorganStateStats.map(node => (
                <StatCard key={node.id} {...node} />
              ))}
          </CardList>
        </Container>
      </Container>
      <Container constraints="center" className="cols-container">
        {preContentBlock && (
          <Group>
            {documentToReactComponents(preContentBlock.json, RICHTEXT_OPTIONS)}
          </Group>
        )}
        {skillsAndJobs && (
          <Group className="cols">
            {documentToReactComponents(skillsAndJobs.json, RICHTEXT_OPTIONS)}
          </Group>
        )}

        {careerDetails && (
          <Group className="cols">
            {documentToReactComponents(careerDetails.json, RICHTEXT_OPTIONS)}
          </Group>
        )}
      </Container>

      <Container constraints="center">
        {carouselPreText && (
          <Group className="wrapper centered narrow">
            {documentToReactComponents(carouselPreText.json, RICHTEXT_OPTIONS)}
          </Group>
        )}
        {normalizedCarousel && (
          <ImageSlider data={normalizedCarousel} settings={carouselSettings} />
        )}
      </Container>

      <Container id="testimonials">
        {testimonialPreText && (
          <Group className="wrapper centered narrow">
            {documentToReactComponents(
              testimonialPreText.json,
              RICHTEXT_OPTIONS
            )}
          </Group>
        )}
        {testimonial && (
          <Testimonial
            image={testimonial.image}
            quote={testimonial.quote}
            author={testimonial.author}
          ></Testimonial>
        )}
      </Container>

      <Container constraints="center" className="cols-container">
        {financialAidOptions && (
          <Group>
            {documentToReactComponents(
              financialAidOptions.json,
              RICHTEXT_OPTIONS
            )}
          </Group>
        )}
      </Container>

      <Container id="discoverProgram">
        <div className="wrapper centered">
          <h3>
            Discover the {typeOfDegree} in {fullProgramName}
          </h3>
          <p>Lorem ipsum dolor sit amet ac urna ullamcorper nisi.</p>
          <Button>Request Information</Button>
        </div>
      </Container>

      <Container id="relatedPrograms" constraints="center">
        {normalizedRelated && (
          <div>
            <h2>Explore Related Programs</h2>
            <ImageSlider
              data={normalizedRelated}
              settings={carouselSettings2}
            />
          </div>
        )}
        {/* <PostLinks
        previous={previous}
        next={next}
        basePath={`${basePath}/program`}
      /> */}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ProgramPostBySlug($slug: String!) {
    contentfulProgram(slug: { eq: $slug }) {
      fullProgramName
      description {
        json
      }
      heroImage {
        fluid(maxWidth: 400) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      availableMethodsOfStudy
      creditHours
      monthsToComplete
      programTracks
      typeOfDegree
      whyMorganStateStats {
        title
        id
        description {
          json
        }
        statisticImage {
          fluid(maxWidth: 400) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
      programDetailUrl
      skillsAndJobs {
        json
      }
      preContentBlock {
        json
      }
      careerDetails {
        json
      }
      carouselPreText {
        json
      }
      financialAidOptions {
        json
      }
      carouselContent {
        id
        title
        description
        image {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
      testimonialPreText {
        json
      }
      testimonial {
        author
        quote {
          json
        }
        image {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
      metaDescription {
        metaDescription
      }
      relatedPrograms {
        fullProgramName
        id
        slug
        typeOfDegree
        metaDescription {
          metaDescription
        }
        heroImage {
          fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

export default ProgramTemplate
