import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';

const NumberInput = styled.input`
::-webkit-inner-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
}
::-webkit-outer-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
}  
`;

const RatingSelect = styled.select`
-webkit-appearance: none;
-webkit-border-radius: 0px;

`;

const Form = styled.form``;

const ReviewForm = (props) => {
  const defaultForm = {
    Reviewer: '',
    Rating: 1,
    Cost: 0,
    Date: '',
    Restaurant: '',
    Review: '',
  };
  const [reviewForm, setFormValue] = useState(defaultForm);
  const [imageUpload, setImageUpload] = useState([]);


  const { url, submission, updateDessertData } = props;

  const getImage = (event) => {
    setImageUpload(event.target.files[0]);
  };

  const updateForm = (event) => {
    setFormValue({
      ...reviewForm,
      [event.target.id]: event.target.value,
    });
  };

  const submitImage = () => {
    const data = new FormData();
    data.append('Image', imageUpload);
    data.append('Restaurant', reviewForm.Restaurant);
    data.append('Reviewer', reviewForm.Reviewer);
    data.append('Date', reviewForm.Date);
    return axios.post(`/api/rateFood${url}/image`, data, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
      .then((res) => { console.log(res); });
  };

  const submitForm = (event) => {
    event.preventDefault();
    axios.post(`/api/rateFood${url}`, reviewForm)
      .then(() => {
        if (imageUpload.length === undefined) {
          return submitImage();
        }
      })
      .then(() => axios.get(`/api/rateFood${url}`))
      .then((data) => {
        updateDessertData(data.data[0]);
      })
      .then(() => {
        submission();
      })
      .catch((err) => {
        console.log('Error with posting review ', err);
      });
  };


  return (
    <Form onSubmit={submitForm}>
      <div>
        <label>
            Name:
        </label>
        <div>
          <input required value={reviewForm.Reviewer} onChange={updateForm} type="text" id="Reviewer" />
        </div>
      </div>
      <div>
        <label>
            Rating:
        </label>
        <RatingSelect value={reviewForm.Rating} required onChange={updateForm} id="Rating">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </RatingSelect>
      </div>
      <div>
        <label>Cost:</label>
        <div>
          <NumberInput value={reviewForm.Cost} required onChange={updateForm} min="0" id="Cost" type="number" />
        </div>
      </div>
      <div>
        <label>
            Date:
        </label>
        <div>
          <input max={moment().local().format('YYYY-MM-DD')} required value={reviewForm.Date} onChange={updateForm} type="date" id="Date" />
        </div>
      </div>
      <div>
        <label>
            Restaurant:
        </label>
        <div>
          <input required value={reviewForm.Restaurant} onChange={updateForm} type="text" id="Restaurant" />
        </div>
      </div>
      <div>
        <label>
            Review:
        </label>
        <div>
          <textarea onChange={updateForm} value={reviewForm.Review} rows="5" cols="40" id="Review" maxLength="280" />
        </div>
      </div>
      <div>
        <label>
          Upload an image:
        </label>
        <div>
          <input onChange={getImage} id="Image" type="file" />
        </div>
      </div>
      <div>
        <input type="submit" value="Submit Review!" />
      </div>
    </Form>
  );
};

export default ReviewForm;
