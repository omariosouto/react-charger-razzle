import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/react.svg';
import './Home.css';




class Home extends Component {

  static async getInitialData() {
    // Faz os fetch muito louco aqui
    return {
      tweets:  await fetch('http://twitelum-api.herokuapp.com/tweets').then((response) => response.json())
    }
  }

  constructor(props) {
    super()
    const isServer = props.staticContext
    if(isServer) {
      this.state = {
        tweets: props.staticContext.tweets
      }
    } else {
      this.state = {
        tweets: window.__PRELOADED_STATE__.tweets || []
      }
      delete window.__PRELOADED_STATE__.tweets
    }
  }

  componentDidMount() {
    if(this.state.tweets.length === 0) {
      fetch('http://twitelum-api.herokuapp.com/tweets').then((response) => response.json())
          .then((tweets) => {
            this.setState({
              tweets
            })
          })
    }
  }

  render() {
    return (
      <div className="Home" >
        <Helmet title="React SSR - Página Home" />
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
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

        <div>
          <h1>List Async</h1>
          <ul>
            { this.state.tweets.map((tweet) => <li key={tweet._id}>{tweet.conteudo}</li>) }
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
