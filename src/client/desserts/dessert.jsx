import React from 'react';
import styled from 'styled-components';


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

  return (
    <div>
      <Title>
        {foodTitle}
      </Title>
    </div>
  );
};

export default Dessert;
