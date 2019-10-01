import React from 'react';
import styled from 'styled-components';
import ReviewListing from './reviewListing.jsx';

const ReviewsMain = styled.div`
width: 50%;
`;

const Reviews = (props) => {
  const { reviews } = props;
  return (
    <ReviewsMain>
      {reviews.map((review) => <ReviewListing review={review} />)}
    </ReviewsMain>


  );
};

export default Reviews;
