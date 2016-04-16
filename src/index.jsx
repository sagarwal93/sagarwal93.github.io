import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';
import Main from './components/Main';
import About from './components/About';
import Resume from './components/Resume';

import './styles.css';

const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

const routes = <Router>
  <Route name='main' path='/' component={Main}>
    <IndexRoute component={About} />
    <Route name='about' path='about' component={About} />
    <Route name='resume' path='resume' component={Resume} />
  </Route>
</Router>;

ReactDOM.render(
  routes, document.getElementById('main')
);
