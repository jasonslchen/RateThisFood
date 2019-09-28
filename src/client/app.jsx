import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Home from './home.jsx';
import Categories from './categories.jsx';
import Desserts from './desserts.jsx';
import Entrees from './entrees.jsx';
import Appetizers from './appetizers.jsx';

const App = (props) => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/appetizers">Appetizer's</Link>
          </li>
          <li>
            <Link to="/entrees">Entree's</Link>
          </li>
          <li>
            <Link to="/desserts">Dessert's</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/appetizers" component={Appetizers} />
        <Route path="/entrees" component={Entrees} />
        <Route path="/desserts" component={Desserts} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
