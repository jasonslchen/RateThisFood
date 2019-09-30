import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import Dessert from './dessert.jsx';
import AllDesserts from './allDesserts.jsx';
// const Dessert = ({ match }) => <p>{match.params.id}</p>;

const Desserts = (props) => (
  <div>
    <div>Here are some Desserts</div>
    <Route exact path="/desserts" component={AllDesserts} />
    <Route path="/desserts/:dessertId" component={Dessert} />
  </div>

);


export default Desserts;
