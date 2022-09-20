import React from 'react';
import styled from 'styled-components';
import IMAGE_SOURCES from './imageSrc';
import Header from './Header';

function ImageText({index}) {
  const {image, text, title, secondImage} = IMAGE_SOURCES[index];

  return (
    <>
      <Header />
      <ImageTextContainer>
        <HalfDiv>
          <h1>{title}</h1>
          <p>{text}</p>
        </HalfDiv>
        <HalfDiv>
          <img src={`${process.env.PUBLIC_URL}/${image}`} alt={title} key={index} />
          {secondImage && (
            <img src={`${process.env.PUBLIC_URL}/${secondImage}`} alt={title} key={index} />
          )}
        </HalfDiv>
      </ImageTextContainer>
    </>
  );
}

export default ImageText;

const ImageTextContainer = styled.div`
  background-color: var(--background-main);
  color: var(--font-color);
  width: 100%;
  min-height: calc(100vh - var(--spacing-600));
  display: flex;
  padding: 0px var(--spacing-500);
  max-width: calc(100% - var(--spacing-500) - var(--spacing-500));

  img {
    width: 100%;
    padding-bottom: var(--spacing-600);
  }
`;
const HalfDiv = styled.div`
  width: 50%;
  padding: var(--spacing-600) var(--spacing-500);
`;
