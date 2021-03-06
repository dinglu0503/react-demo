import React, { Component }from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Header from './common/header'
import Reset from './reset.js';
import Iconfont from'./assets/iconfont/iconfont';
import store from './store';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div>
        <BrowserRouter>
          <div>
            <Reset />
            <Iconfont />
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
