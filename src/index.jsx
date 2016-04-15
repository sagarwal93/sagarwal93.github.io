import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from './components/Main';
import About from './components/About';
import Resume from './components/Resume';

import './styles.css';

const routes = <Router history={browserHistory}>
  <Route name='main' path='/' component={Main}>
    <IndexRoute component={About} />
    <Route name='about' path='about' component={About} />
    <Route name='resume' path='resume' component={Resume} />
  </Route>
</Router>;

ReactDOM.render(
  routes, document.getElementById('main')
);
