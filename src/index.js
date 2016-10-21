import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/index.css';

import App from './components/App'
import Home from './components/Home';
import CloudType from './components/CloudType';
import Nope from './components/Nope'

console.log('goodbye blue monday');

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={Home} />
        <Match exactly pattern='/clouds' component={App} />
        <Match pattern='/clouds/:cloudId' component={CloudType} />
        <Miss component={Nope}/>
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('root'));
