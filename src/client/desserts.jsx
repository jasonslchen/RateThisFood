import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import Dessert from './desserts/dessert.jsx';

// const Dessert = ({ match }) => <p>{match.params.id}</p>;

const Desserts = (props) => {
  console.log('hi');
  return (
    <div>
      <div>Here are some Desserts</div>
      <Link to="/desserts/matcha-soft-serve">Matcha Soft Serve</Link>
      <Link to="/desserts/black-sesame-soft-serve">Black Sesame Soft Serve</Link>
      <Link to="/desserts/vanilla-soft-serve">Vanilla Soft Serve</Link>
      <Route path="/desserts/:dessertId" component={Dessert} />
    </div>

  );
};


export default Desserts;

// const User = ({ match }) => <p>{match.params.id}</p>
// class Users extends React.Component {
//   render() {
//     const { url } = this.props.match
//     return (
//       <div>
//         <h1>Users</h1>
//         <strong>select a user</strong>
//         <ul>
//           <li>
//             <Link to="/users/1">User 1 </Link>
//           </li>
//           <li>
//             <Link to="/users/2">User 2 </Link>
//           </li>
//           <li>
//             <Link to="/users/3">User 3 </Link>
//           </li>
//         </ul>
//         <Route path="/users/:id" component={User} />
//       </div>
//     )
//   }
// }
// export default Users'
