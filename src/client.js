import Routes from './Routes';
import React from 'react';
import { hydrate } from 'react-dom';
import Loadable from 'react-loadable';
import BrowserRouter from 'react-router-dom/BrowserRouter';

window.main = () => {
  Loadable.preloadReady().then(() => {
    hydrate(
      <BrowserRouter>
        <Routes />
      </BrowserRouter>,
      document.getElementById('root')
    );
  });
}