import React from 'react'
import { graphql } from 'gatsby'
import '@brainhubeu/react-carousel/lib/style.css'
import { GatsbyImage as Img } from 'gatsby-plugin-image'

import { renderRichText } from 'gatsby-source-contentful/rich-text'

import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { Button } from 'theme-ui'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
// import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import SEO from '../components/SEO'
import CardList from '../components/CardList'
import Testimonial from '../components/Testimonial'
import ImageSlider from '../components/Slider'

import ProgramStat from '../components/ProgramStat'

import StatCard from '../components/StatCard'
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
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <a className="link" href={data.uri}>
        {children}
      </a>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.EMBEDDED_ASSET]: ({ data }) => <Img image={data.target.gatsbyImageData} alt={data.target.title} />,
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
    skillsAndJobs,
    careerDetails,
    carouselPreText,
    testimonialPreText,
    carouselContent,
    testimonial,
    financialAidOptions,
    relatedPrograms,
  } = data.contentfulProgram
  // const previous = pageContext.prev
  // const { next } = pageContext
  const { basePath } = pageContext

  let ogImage
  try {
    ogImage = heroImage.ogimg.src
  } catch (error) {
    ogImage = null
  }

  const normalizedCarousel =
    carouselContent &&
    carouselContent.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      description: item.description,
    }))

  const normalizedRelated =
    relatedPrograms &&
    relatedPrograms.map((item) => ({
      id: item.id,
      title: item.fullProgramName,
      image: item.heroImage,
      description: item.metaDescription ? item.metaDescription.metaDescription : null,
    }))

  return (
    <Layout>
      <SEO
        title={title}
        description={metaDescription ? metaDescription.metaDescription : 'Title Needed'}
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
            {availableMethodsOfStudy && availableMethodsOfStudy.map((method) => <li key={method}>{method}</li>)}
          </ul>
        </div>
        <div className="programIntro">
          <p>
            Sit in molestie facilisis quisque nisl. Elementum sed ut sed risus porttitor. Quis volutpat viverra lacus
            leo pellentesque. Diam integer massa molestie in. Morbi neque a, praesent eros, mi iaculis a magna. Commodo,
            ipsum pretium donec condimentum nulla non vitae enim. Ipsum tellus imperdiet arcu nec, mattis elit est
            integer. Eleifend egestas orci, vivamus diam massa enim consequat, non augue. Volutpat et sodales vestibulum
            placerat.
          </p>
        </div>
        <div className="programStats">
          {creditHours && <ProgramStat stat={creditHours} description="Credit Hours" />}
          {monthsToComplete && <ProgramStat stat={monthsToComplete} description="Months to Complete" />}
          {programTracks && <ProgramStat stat={programTracks} description="Program Tracks" />}
        </div>
      </Container>
      <Container id="requestInfoCta">
        <div className="ctaContent narrow">
          <p>
            In enim sem orci adipiscing cras tempus.{' '}
            <strong>Malesuada odio egestas aliquet sed neque lectus cras.</strong>
          </p>
          <button type="submit">Request Information</button>
        </div>
      </Container>
      <Container className="cols" constraints="center">
        <Group className="programDescription cols">
          {description && renderRichText(description, RICHTEXT_OPTIONS)}
        </Group>
      </Container>
      <Container id="whyMorganState" className="drkbg">
        <Container constraints="center">
          <h2>Why Morgan State?</h2>
          <CardList>
            {whyMorganStateStats &&
              whyMorganStateStats.map((node) => (
                <StatCard key={node.id} description={node.description} statisticImage={node.statisticImage} />
              ))}
          </CardList>
        </Container>
      </Container>
      <Container constraints="center" className="cols-container">
        {skillsAndJobs && <Group className="cols">{renderRichText(skillsAndJobs, RICHTEXT_OPTIONS)}</Group>}

        {careerDetails && <Group className="cols">{renderRichText(careerDetails, RICHTEXT_OPTIONS)}</Group>}
      </Container>

      <Container constraints="center">
        {carouselPreText && (
          <Group className="wrapper centered narrow">{renderRichText(carouselPreText, RICHTEXT_OPTIONS)}</Group>
        )}
        {normalizedCarousel && <ImageSlider data={normalizedCarousel} settings={carouselSettings} />}
      </Container>

      <Container id="testimonials">
        {testimonialPreText && (
          <Group className="wrapper centered narrow">{renderRichText(testimonialPreText, RICHTEXT_OPTIONS)}</Group>
        )}
        {testimonial && (
          <Testimonial
            image={testimonial.image}
            quote={renderRichText(testimonial.quote, RICHTEXT_OPTIONS)}
            author={testimonial.author}
          />
        )}
      </Container>

      <Container constraints="center" className="cols-container">
        {financialAidOptions && <Group>{renderRichText(financialAidOptions, RICHTEXT_OPTIONS)}</Group>}
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
            <ImageSlider data={normalizedRelated} settings={carouselSettings2} />
          </div>
        )}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ProgramPostBySlug($slug: String!) {
    contentfulProgram(slug: { eq: $slug }) {
      fullProgramName
      description {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            title
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 600)
          }
        }
      }
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH)
        title
      }
      availableMethodsOfStudy
      creditHours
      monthsToComplete
      programTracks
      programDetailUrl
      thumbnail {
        fixed {
          src
        }
      }
      typeOfDegree
      whyMorganStateStats {
        title
        id
        description {
          raw
        }
        statisticImage {
          title
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 400)
        }
      }
      programDetailUrl
      skillsAndJobs {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            title
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 640)
          }
        }
      }
      preContentBlock {
        raw
      }
      careerDetails {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            title
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 640)
          }
        }
      }
      carouselPreText {
        raw
      }
      financialAidOptions {
        raw
      }
      carouselContent {
        id
        title
        description
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 1080)
          title
        }
      }
      testimonialPreText {
        raw
      }
      testimonial {
        author
        quote {
          raw
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 800)
          title
        }
      }
      metaDescription {
        metaDescription
      }
      relatedPrograms {
        fullProgramName
        id
        slug
        thumbnail {
          fixed {
            src
          }
        }
        typeOfDegree
        metaDescription {
          metaDescription
        }
        heroImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 350)
          title
        }
      }
    }
  }
`

export default ProgramTemplate
