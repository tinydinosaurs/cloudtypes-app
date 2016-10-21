import React from 'react';
import { BrowserRouter, Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>I'm yelling now.</h1>
        everybody gotta have a home.
        <h2>this is navigation</h2>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/clouds'>Clouds</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;
