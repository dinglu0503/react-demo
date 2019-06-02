import React from 'react';
import ReactDOM from 'react-dom';
import Reset from './reset.js';
import Iconfont from'./assets/iconfont/iconfont';

import App from './App';

const Wrapper = (
  <App>
    <Reset />
    <Iconfont />
  </App>
)
ReactDOM.render(Wrapper, document.getElementById('root'));

