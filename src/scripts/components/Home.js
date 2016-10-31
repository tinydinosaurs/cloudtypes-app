import React from 'react';
import { Link } from 'react-router';
import data from '../data/CloudData';

console.log(data.highClouds.cirrus);


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>I'm yelling now.</h1>
        <p>everybody gotta have a home.</p>
        <p>cirrus cloud abbreviation: {data.highClouds.cirrus.abbreviation}</p>
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
