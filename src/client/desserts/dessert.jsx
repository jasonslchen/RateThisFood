import React, { useEffect } from 'react';
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
    axios.get(`/api/rateFood${props.match.url}`)
      .then((data) => {
        console.log(data.data[0]);
      })
      .catch((err) => {
        console.log('Error with acquiring data ', err);
      });
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
