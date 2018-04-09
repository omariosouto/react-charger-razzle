import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import './App.css';
import Home from './Home';
import Loadable from 'react-loadable'

const AsyncAbout = Loadable({
  loader: () => import('./pages/About'),
  loading: () => null,
});

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={AsyncAbout} />
  </Switch>
);

export default App;
