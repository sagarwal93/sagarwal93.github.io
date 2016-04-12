import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from './components/Main';
import About from './components/About';

import './styles.css';

const routes = <Router history={browserHistory}>
  <Route name='main' path='/' component={Main}>
    <IndexRoute component={About} />
  </Route>
</Router>;

ReactDOM.render(
  routes, document.getElementById('main')
);
