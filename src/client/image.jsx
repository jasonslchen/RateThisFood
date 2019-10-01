import React from 'react';
import styled from 'styled-components';


const FoodImageDiv = styled.div`
position: relative;
box-sizing: border-box;
width: 250px;
height: 250px;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
`;

const FoodImage = styled.img`
  object-fit: cover;
  width: 100%;
  min-height: 100%;

`;
const Image = (props) => {
  const { image } = props;
  let source = image.Image;
  if (!image.Image.includes('.com')) {
    source = `/images/${image.Image}`;
  }
  return (
    <div>
      <FoodImageDiv>
        <FoodImage src={source} alt={image || 'no image'} />
      </FoodImageDiv>
    </div>
  );
};

export default Image;
