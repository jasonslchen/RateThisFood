/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ReviewMain = styled.div`
border: 1px solid black;
`;

const ReviewListing = ({ review }) => {
  const date = moment(review.Date).format('MMM DD, YYYY');
  return (
    <ReviewMain>
      <div>Reviewer: {review.Reviewer}</div>
      <div>Rating: {review.Rating}</div>
      <div>Cost: ${review.Cost}</div>
      <div>Date: {date}</div>
      <div>Restaurant: {review.Restaurant}</div>
      <div>Review: {review.Review}</div>
    </ReviewMain>
  );
};

export default ReviewListing;
