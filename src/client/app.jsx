import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './home.jsx';
import Desserts from './desserts.jsx';
import Entrees from './entrees.jsx';
import Appetizers from './appetizers.jsx';
import Dessert from './desserts/dessert.jsx';

const customHistory = createBrowserHistory();

const App = (props) => (
  <Router history={customHistory}>
    <div>
      <Link to="/">Home</Link>
      <Link to="/appetizers">Appetizers</Link>
      <Link to="/entrees">Entrees</Link>
      <Link to="/desserts">Desserts</Link>
      <Switch>
        <Route path="/desserts" component={Desserts} />
        <Route path="/entrees" component={Entrees} />
        <Route path="/appetizers" component={Appetizers} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
