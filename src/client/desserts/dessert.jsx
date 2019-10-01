import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewForm from '../reviewForm.jsx';
import Reviews from '../reviews.jsx';
import ImageGallery from '../imageGallery.jsx';

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

  const [dessertData, setDessertData] = useState({ Reviews: [], Images: [] });
  const [reviewSubmit, setReviewSubmission] = useState(false);
  const [submitInitReview, setSubmitInitReview] = useState(true);
  useEffect(() => {
    let subscribed = true;
    axios.get(`/api/rateFood${props.match.url}`)
      .then((data) => {
        if (subscribed) {
          setDessertData(data.data[0]);
        }
      })
      .catch((err) => {
        console.log('Error with acquiring data ', err);
      });
    return () => { console.log('unsubscribed'); subscribed = false; };
  }, [props.match.url]);

  const toggleReviewForm = () => {
    if (submitInitReview) {
      setSubmitInitReview(false);
    } else {
      setReviewSubmission(!reviewSubmit);
    }
  };
  const updateDessertData = (data) => {
    setDessertData(data);
  };

  const thankYouForTheReview = (
    <div>
      Thank you for submitting a review!
      <button onClick={toggleReviewForm}>Submit another review :)</button>
    </div>
  );
  const submitAReview = (
    <div>
      Do you want to submit a review?
      <button onClick={toggleReviewForm}>Submit a review</button>
    </div>
  );
  return (
    <div>
      <Title>
        {foodTitle}
      </Title>
      <ImageGallery images={dessertData.Images} />
      <Reviews reviews={dessertData.Reviews} />
      {
        submitInitReview ? submitAReview : (reviewSubmit ? thankYouForTheReview : <ReviewForm updateDessertData={updateDessertData} submission={toggleReviewForm} url={props.match.url} />)
      }
    </div>
  );
};

export default Dessert;
