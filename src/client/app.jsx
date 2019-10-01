import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import Home from './home.jsx';
import Desserts from './desserts/desserts.jsx';
import Entrees from './entrees/entrees.jsx';
import Appetizers from './appetizers/appetizers.jsx';

const customHistory = createBrowserHistory();

const Header = styled.div`
  background-color: #9AD4D6;
  height: 50px;
`;

const StyledLink = styled(Link)`
color: purple;
&:hover {
  color: orange;
}
border: 1px solid black;
height: 100%;
`;

const AppDiv = styled.div`
background-color: #F2FDFF;
`;

const App = (props) => (
  <Router history={customHistory}>
    <AppDiv>
      <Header>
        <div>Rate This Food</div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/appetizers">Appetizers</StyledLink>
        <StyledLink to="/entrees">Entrees</StyledLink>
        <StyledLink to="/desserts">Desserts</StyledLink>
      </Header>
      <Switch>
        <Route path="/desserts" component={Desserts} />
        <Route path="/entrees" component={Entrees} />
        <Route path="/appetizers" component={Appetizers} />
        <Route exact path="/" component={Home} />
      </Switch>
    </AppDiv>
  </Router>
);

export default App;
