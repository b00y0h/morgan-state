import React from 'react';
import ContentfulCallToActionCta from 'components/content-modules/CallToAction';
import ContentfulHeadline from 'components/content-modules/Headline';
import ContentfulParagraph from 'components/content-modules/Paragraph';
import ContentfulSetOfTwo from 'components/content-modules/TwoColumn';
import ContentfulSetOfThree from 'components/content-modules/ThreeColumn';
import ContentfulImageWithCaption from 'components/content-modules/ImageWithCaption';
import ContentfulHeroImage from 'components/content-modules/HeroImage';
import ContentfulTestimonialQuote from 'components/content-modules/TestimonialQuote';
import ContentfulParagraphWithHeadline from 'components/content-modules/ParagraphWithHeadline';
import ContentfulStatBlocks from 'components/content-modules/StatBlock';
import ContentfulCard from 'components/content-modules/ContentfulCard';
// map over components and return only the ones that are enabled
const componentsMap = {
  ContentfulCallToActionCta,
  ContentfulHeadline,
  ContentfulParagraph,
  ContentfulSetOfTwo,
  ContentfulSetOfThree,
  ContentfulImageWithCaption,
  ContentfulHeroImage,
  ContentfulTestimonialQuote,
  ContentfulParagraphWithHeadline,
  ContentfulStatBlocks,
  ContentfulCard,
};

export const getContentfulModules = (module, index) => {
  // console.log('🚀🚀🚀  module.internal.type', module.internal.type)
  const Component = componentsMap[module.internal.type];
  if (Component) {
    return <Component data={module} key={index} />;
  }
  return null;
};

export default getContentfulModules;
