import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Loadable from 'react-loadable';
import './Home.css';

const Intro = Loadable({
  loader: () => import('./Intro'),
  loading: () => null,
});

const Welcome = Loadable({
  loader: () => import('./Welcome'),
  loading: () => null,
});
const Logo = Loadable({
  loader: () => import('./Logo'),
  loading: () => null,
});

class Home extends Component {

  static async getInitialData() {
    return {
      tweets: await fetch('http://twitelum-api.herokuapp.com/tweets').then((response) => response.json())
    }
  }
  
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <Logo />
          <Welcome />
        </div>
        <Intro />
        <ul className="Home-resources">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/private-route">Private Route</Link>
          </li>
          <li>
            <Link to="/404crosstest">404 Page</Link>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
