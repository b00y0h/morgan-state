import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

const Quote = styled.blockquote`
  position: relative;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${(props) => props.theme.responsive.small}) {
    flex: ${(props) => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    flex: ${(props) => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
`;

const Author = styled.figcaption`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`;

const Testimonial = ({ quote, author, image, ...props }) => (
  <>
    {quote && (
      <figure className="testimonial">
        <Quote>
          {image && <Img image={image.gatsbyImageData} alt={image.title} />}
          <div className="description">
            {quote}
            <Author>- {author}</Author>
          </div>
        </Quote>
      </figure>
    )}
  </>
);

export default Testimonial;
