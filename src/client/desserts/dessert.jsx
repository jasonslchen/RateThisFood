import React from 'react';

const Dessert = (props) => {
  console.log('dessert');
  console.log(props.match.params.dessertId);
  return (
    <div>
      {props.match.params.dessertId}
    </div>
  );
};

export default Dessert;
