import React, { useState } from 'react';
import styled from 'styled-components';
import Image from './image.jsx';

const ImageCarousel = styled.div`
display: flex;

`;

const ImageGalleryMain = styled.div`
display: flex
`;

const ImageGallery = (props) => {
  const { images } = props;

  const [shownImages, setShownImages] = useState({ start: 0, end: 2 });
  const moveImages = (event) => {
    if (event.target.id === 'back') {
      setShownImages({ start: Math.max(0, shownImages.start - 1), end: Math.max(2, shownImages.end - 1) });
    } else if (event.target.id === 'next') {
      setShownImages({ start: Math.min(images.length - 3, shownImages.start + 1), end: Math.min(images.length - 1, shownImages.end + 1) });
    }
  };
  const imageCarousel = images.slice(shownImages.start, shownImages.end + 1).map((image) => <Image image={image} />);


  return (
    <ImageGalleryMain>
      <div>
        <button onClick={moveImages} id="back">Back</button>
      </div>
      <ImageCarousel>
        {imageCarousel}
      </ImageCarousel>
      <div>
        <button onClick={moveImages} id="next">Next</button>
      </div>
    </ImageGalleryMain>
  );
};

export default ImageGallery;
