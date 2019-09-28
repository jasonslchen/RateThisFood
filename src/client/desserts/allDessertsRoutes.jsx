import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MatchaSoftServe from './matcha-soft-server.jsx';

const AllDessertsRoutes = (props) => (
  <div>
    <Switch>
      <Route path="/desserts/Matcha-Soft-Serve" component={MatchaSoftServe} />
    </Switch>
  </div>
);

export default AllDessertsRoutes;
