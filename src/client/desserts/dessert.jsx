import React from 'react';
import styled from 'styled-components';

const Dessert = (props) => {
  const dessertName = props.match.params.dessertId;
  const foodTitle = dessertName.split('-').map((word) => {
    const capitalize = word.split('');
    capitalize[0] = capitalize[0].toUpperCase();
    return capitalize.join('');
  }).join(' ');

  return (
    <div>
      {foodTitle}
    </div>
  );
};

export default Dessert;
