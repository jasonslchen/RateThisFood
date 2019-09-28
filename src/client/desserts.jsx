import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import MatchaSoftServe from './desserts/matcha-soft-server.jsx';

const Desserts = ({ match }) => {
  console.log(match.url);
  console.log('hi');
  return (
    <div>
      <div>Here are some Desserts</div>
      {/* <ul>
      <li>
        <Link to={`${match.url}/Matcha-Soft-Serve`}>Matcha Soft Serve</Link>
      </li>
    </ul>
    <Route path={`${match.path}/:dessert`}>
      <MatchaSoftServe />
    </Route> */}
    </div>
  );
};

export default Desserts;
