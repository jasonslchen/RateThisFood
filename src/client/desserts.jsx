import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import MatchaSoftServe from './desserts/matcha-soft-server.jsx';
import AllDessertsLinks from './desserts/allDessertsLinks.jsx';
import AllDessertRoutes from './desserts/allDessertsRoutes.jsx';

const Desserts = (props) => (
  <div>
    <div>Here are some Desserts</div>
    <AllDessertsLinks />
    <AllDessertRoutes />
  </div>

);

export default Desserts;
