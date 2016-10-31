import React from 'react';

class Nope extends React.Component {
  render() {
    return (
      <div>
      <p>you done messed up, son.</p>
      <p>{location.pathname} doesn't exist</p>
      </div>
    )
  }
}

export default Nope;
