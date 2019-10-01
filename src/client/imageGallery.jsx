import React, { useState } from 'react';
import styled from 'styled-components';
import Image from './image.jsx';

const ImageCarousel = styled.div`
display: flex;

`;

const ImageGalleryMain = styled.div`
display: flex
`;

const FancyButton = styled.button`
::before {
  content: '👉🏼';
}
`;

const OppositeFancyButton = styled(FancyButton)`
  ::before {
    content: '👈🏼';
  }
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
        <OppositeFancyButton onClick={moveImages} id="back" />
      </div>
      <ImageCarousel>
        {imageCarousel}
      </ImageCarousel>
      <div>
        <FancyButton onClick={moveImages} id="next" />
      </div>
    </ImageGalleryMain>
  );
};

export default ImageGallery;
