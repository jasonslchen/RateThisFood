import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewForm from '../reviewForm.jsx';
import Reviews from '../reviews.jsx';

const Title = styled.div`
  border: 1px solid black;
`;


const Dessert = (props) => {
  const dessertName = props.match.params.dessertId;
  const foodTitle = dessertName.split('-').map((word) => {
    const capitalize = word.split('');
    capitalize[0] = capitalize[0].toUpperCase();
    return capitalize.join('');
  }).join(' ');

  const [dessertData, setDessertData] = useState({ Reviews: [] });

  useEffect(() => {
    axios.get(`/api/rateFood${props.match.url}`)
      .then((data) => {
        setDessertData(data.data[0]);
      })
      .catch((err) => {
        console.log('Error with acquiring data ', err);
      });
  }, [props.match.url]);

  console.log(dessertData.Reviews);
  return (
    <div>
      <Title>
        {foodTitle}
      </Title>
      <Reviews reviews={dessertData.Reviews} />
      <ReviewForm />
    </div>
  );
};

export default Dessert;
