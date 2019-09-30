import React from 'react';
import ReviewListing from './reviewListing.jsx';

const Reviews = (props) => {
  const { reviews } = props;
  return (
    <div>
      {reviews.map((review) => <ReviewListing review={review} />)}
    </div>

  );
};

export default Reviews;
