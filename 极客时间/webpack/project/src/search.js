'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import logo from './images/webpack-logo.svg';
const Search = () => {
  return (
    <div className="search-text">
      <img src={logo} width="100" height="50" />
      Search Text watch
    </div>
  );
};

ReactDOM.render(<Search />, document.getElementById('root'));
