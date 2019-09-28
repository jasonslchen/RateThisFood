import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Home from './home.jsx';
import Desserts from './desserts.jsx';
import Entrees from './entrees.jsx';
import Appetizers from './appetizers.jsx';


const App = (props) => (
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
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
