import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Home from './pages/Home';
import Loadable from 'react-loadable'

const AsyncAbout = Loadable({
  loader: () => import('./pages/About'),
  loading: () => null,
});

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={AsyncAbout} />
    <Route path="*" component={() => <div>404 Page</div>} />
  </Switch>
);

export default App;
