import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
color: red;
&:hover {
  background: #222;
}
`;

const AllDesserts = (props) => (
  <div>
    <StyledLink to="/desserts/matcha-soft-serve">Matcha Soft Serve</StyledLink>
    <StyledLink to="/desserts/black-sesame-soft-serve">Black Sesame Soft Serve</StyledLink>
    <StyledLink to="/desserts/vanilla-soft-serve">Vanilla Soft Serve</StyledLink>
  </div>
);

export default AllDesserts;
