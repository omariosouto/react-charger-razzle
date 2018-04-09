import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/react.svg';
import './Home.css';
import { connect } from 'react-redux'



class Home extends Component {
  constructor() {
    super()

    this.state = {
      tweets: []
    }
  }

  static async getInitialData() {
    return {
      tweets: await fetch('http://twitelum-api.herokuapp.com/tweets').then((response) => response.json())
    }
  }

  componentDidMount() {
    if(this.props.tweets.length === 0) {
      this.props.carregaTweets()
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
            { this.props.tweets.map((tweet) => <li key={tweet._id}>{tweet.conteudo}</li>) }
          </ul>
        </div>
      </div>
    );
  }
}

// export default Home

const mapStateToProps = (stateDaStore) => {
  return {
    tweets: stateDaStore.tweets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    carregaTweets: () => {
      fetch('http://twitelum-api.herokuapp.com/tweets').then((response) => response.json())
        .then((response) => {
          console.log('disparou o carrega tweets :)', response)
          dispatch({ type: 'CARREGA_TWEETS', tweets: response })
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
