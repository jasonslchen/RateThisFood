import React from 'react';
import styled from 'styled-components';

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
width: 25%
`;

const Form = styled.form``;

const ReviewForm = (props) => (
  <Form>
    <div>
      <label>
            Name:
      </label>
      <div>
        <input type="text" id="Reviewer" />
      </div>
    </div>
    <div>
      <label>
            Rating:
      </label>
      <RatingSelect id="Rating">
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
        <NumberInput min="0" id="Cost" type="number" />
      </div>
    </div>
    <div>
      <label>
            Date:
      </label>
      <div>
        <input type="date" id="Date" />
      </div>
    </div>
    <div>
      <label>
            Restaurant:
      </label>
      <div>
        <input type="text" id="Restaurant" />
      </div>
    </div>
    <div>
      <label>
            Review:
      </label>
      <div>
        <textarea rows="5" cols="40" id="Review" maxLength="280" />
      </div>
    </div>
    <div>
      <input type="submit" value="Submit Review!" />
    </div>
  </Form>
);

export default ReviewForm;
