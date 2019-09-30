import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewForm from '../reviewForm.jsx';

const Title = styled.div`
  border: 1px solid black;
`;


const Dessert = (props) => {
  const dessertName = props.match.params.dessertId;
  console.log(props.match);
  const foodTitle = dessertName.split('-').map((word) => {
    const capitalize = word.split('');
    capitalize[0] = capitalize[0].toUpperCase();
    return capitalize.join('');
  }).join(' ');
  const images = [];

  useEffect(() => {
    axios.get('');
  });

  return (
    <div>
      <Title>
        {foodTitle}
      </Title>
      <ReviewForm />
    </div>
  );
};

export default Dessert;
