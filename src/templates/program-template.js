import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import "@brainhubeu/react-carousel/lib/style.css";
import { GatsbyImage as Img } from "gatsby-plugin-image";

import { renderRichText } from "gatsby-source-contentful/rich-text";

import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import handleViewport from "react-in-viewport";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Container from "../components/Container";
// import PageBody from '../components/PageBody'
import TagList from "../components/TagList";
import SEO from "../components/SEO";
import CardList from "../components/CardList";
import Testimonial from "../components/Testimonial";
import ImageSlider from "../components/Slider";

import ProgramStat from "../components/ProgramStat";

import StatCard from "../components/StatCard";
import Group from "../components/common/Container/Group";

const carouselSettings = {
  dot: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: "linear",
};

const relatedProgramSettings = {
  dot: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: "linear",
};

const RICHTEXT_OPTIONS = {
  renderNode: {
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <a className="link" href={data.uri}>
        {children}
      </a>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.EMBEDDED_ASSET]: ({ data }) => (
      <Img image={data.target.gatsbyImageData} alt={data.target.title} />
    ),
  },
};

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
    discoverProgramImage,
    relatedPrograms,
  } = data.contentfulProgram;
  // const previous = pageContext.prev
  // const { next } = pageContext
  const { basePath } = pageContext;

  let ogImage;
  try {
    ogImage = heroImage.ogimg.src;
  } catch (error) {
    ogImage = null;
  }

  const normalizedCarousel =
    carouselContent &&
    carouselContent.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      description: item.description,
    }));

  const normalizedRelated =
    relatedPrograms &&
    relatedPrograms.map((item) => ({
      id: item.id,
      title: item.fullProgramName,
      image: item.heroImage,
      description: item.metaDescription
        ? item.metaDescription.metaDescription
        : null,
    }));

  const [pos, setPos] = useState("top");

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 1150) {
        setPos("sticky");
      } else {
        setPos("top");
      }
    }),
      [];
  });

  const statsCardsAmount = whyMorganStateStats && whyMorganStateStats.length;

  const CtaSectionTopC = (props) => {
    const { forwardedRef } = props;
    return (
      <div
        id="requestInfoCta"
        className={`viewport-block ${
          pos === "sticky" ? " sticked" : "site-header"
        }`}
        ref={forwardedRef}
      >
        <Container>
          <div className="ctaContent narrow">
            <p>
              In enim sem orci adipiscing cras tempus.{" "}
              <strong>
                Malesuada odio egestas aliquet sed neque lectus cras.
              </strong>
            </p>
            <button>Request Information</button>
          </div>
        </Container>
      </div>
    );
  };

  const CtaSectionTop = handleViewport(
    CtaSectionTopC /** options: {}, config: {} * */
  );

  const CtaSectionBottomC = (props) => {
    const { forwardedRef } = props;
    return (
      <div className="viewport-block" ref={forwardedRef}>
        <Container id="discoverProgram">
          {discoverProgramImage && (
            <Img
              image={discoverProgramImage.fluid}
              className="discoverBgImg"
              alt=""
              fluid={discoverProgramImage.fluid}
            />
          )}
          <div className="wrapper centered">
            <h3>
              Discover the {typeOfDegree} in {fullProgramName}
            </h3>
            <p>
              Find meaningful success-both personally and professionally-width
              the{" "}
              {availableMethodsOfStudy && availableMethodsOfStudy.join(" or ")}{" "}
              {typeOfDegree} in {fullProgramName}. If you're ready to learn
              valuable skills for a more rewarding career, why wait?{" "}
              <strong>Request more information today</strong> and we'll reach
              out to you with all the details you need.
            </p>
            <button>Request Information</button>
          </div>
        </Container>
      </div>
    );
  };

  const CtaSectionBottom = handleViewport(
    CtaSectionBottomC /** options: {}, config: {} * */
  );

  const ChangeClassBottom = () => {
    const topCta = document.querySelector("#requestInfoCta");
    topCta.classList.toggle("hidden");
  };

  return (
    <Layout className="programTemplate">
      <SEO
        title={title}
        description={
          metaDescription ? metaDescription.metaDescription : "Title Needed"
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
              availableMethodsOfStudy.map((method) => (
                <li key={method}>{method}</li>
              ))}
          </ul>
        </div>
        <div className="programIntro">
          {metaDescription && <p>{metaDescription.metaDescription}</p>}
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

      <CtaSectionTop
        onEnterViewport={() => {
          console.log("enter trigger");
          // ChangeClass()
        }}
        onLeaveViewport={() => {
          console.log("leave trigger");
          // ChangeClass()
        }}
      />

      <Container className="cols" constraints="center">
        <Group className="programDescription cols">
          {description && renderRichText(description, RICHTEXT_OPTIONS)}
        </Group>
      </Container>
      <Container id="whyMorganState" className="drkbg">
        <Container constraints="center">
          <h2>Why Morgan State?</h2>
          <CardList rows={`${statsCardsAmount <= 4 ? "one-row" : "two-rows"}`}>
            {whyMorganStateStats &&
              whyMorganStateStats.map((node) => (
                <StatCard
                  key={node.id}
                  description={node.description}
                  statisticImage={node.statisticImage}
                />
              ))}
          </CardList>
        </Container>
      </Container>
      <Container constraints="center" className="cols-container">
        {skillsAndJobs && (
          <Group className="cols">
            {renderRichText(skillsAndJobs, RICHTEXT_OPTIONS)}
          </Group>
        )}

        {careerDetails && (
          <Group className="cols">
            {renderRichText(careerDetails, RICHTEXT_OPTIONS)}
          </Group>
        )}
      </Container>

      <Container constraints="center">
        {carouselPreText && (
          <Group className="wrapper centered narrow">
            {renderRichText(carouselPreText, RICHTEXT_OPTIONS)}
          </Group>
        )}
        {normalizedCarousel && (
          <ImageSlider
            className="research-interships"
            data={normalizedCarousel}
            settings={carouselSettings}
          />
        )}
      </Container>

      <Container id="testimonials">
        {testimonialPreText && (
          <Group className="wrapper centered narrow">
            {renderRichText(testimonialPreText, RICHTEXT_OPTIONS)}
          </Group>
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
        {financialAidOptions && (
          <Group>{renderRichText(financialAidOptions, RICHTEXT_OPTIONS)}</Group>
        )}
      </Container>

      <CtaSectionBottom
        onEnterViewport={() => {
          ChangeClassBottom();
        }}
        onLeaveViewport={() => {
          ChangeClassBottom();
        }}
      />

      <Container id="relatedPrograms" constraints="center">
        <Group>
          {normalizedRelated && (
            <div>
              <h2>Explore Related Programs</h2>
              <ImageSlider
                className="related-programs"
                data={normalizedRelated}
                settings={relatedProgramSettings}
              />
            </div>
          )}
        </Group>
        <div className="buttons centered">
          <Link to="/" className="button">
            View all programs
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

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
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 600
            )
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
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 640
            )
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
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 640
            )
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
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1080
          )
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
      discoverProgramImage {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default ProgramTemplate;
