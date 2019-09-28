import React from 'react';

const Home = (props) => (
  <div>
    <form>
      <label>
        Search for Food
        <input type="text" />
      </label>
      <input type="submit" value="Find Food" />
    </form>
  </div>
);

export default Home;
