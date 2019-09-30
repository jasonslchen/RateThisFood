import React, { useState } from 'react';
import Image from './image.jsx';

const ImageGallery = (props) => {
  const { images } = props;
  const imageCarousel = images.map((image) => (
    <Image image={image} />
  ));
  const [shownImages, setShownImages] = useState(0);
  const moveImages = (event) => {
    if (event.target.id === 'back') {
      setShownImages(shownImages - 1);
    } else if (event.target.id === 'next') {
      setShownImages(shownImages + 1);
    }
  };
  return (
    <div>
      <div>
        <button onClick={moveImages} id="back">Back</button>
      </div>
      <div>
        {imageCarousel[shownImages]}
      </div>
      <div>
        <button onClick={moveImages} id="next">Next</button>
      </div>
    </div>
  );
};

export default ImageGallery;
