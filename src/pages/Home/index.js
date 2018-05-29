import React, { Component } from 'react';
import Helmet from 'react-helmet'
import logo from '../../assets/img/react.svg';
import './Home.css';
import NavMenu from '../../components/NavMenu'

class Home extends Component {

  static async getInitialData() {
    try {
      return {
        repos:  await fetch('https://api.github.com/users/omariosouto/repos').then((response) => response.json())
      }
    } catch(error) {
      // Se algum erro acontecer: console.log(error)
      return {
        repos: []
      }
    }
  }

  constructor(props) {
    super()
    const isServer = props.staticContext
    if(isServer) {
      this.state = {
        repos: props.staticContext.repos
      }
    } else {
      this.state = {
        repos: window.__PRELOADED_STATE__.repos || []
      }
      delete window.__PRELOADED_STATE__.repos
    }
  }

  componentDidMount() {
    if(this.state.repos.length === 0) {
      fetch('https://api.github.com/users/omariosouto/repos').then((response) => response.json())
          .then((repos) => {
            this.setState({
              repos
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
          <h2>Welcome to React Charger Razzle: React + React Router</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>./src/client.js</code> or{' '}
          <code>./src/pages/Home.js</code> and save to reload.
        </p>

        <NavMenu />

        <div>
          <h1>Getting Repos from GitHub and SSR it:</h1>
          <ul>
            { this.state.repos.map((repo) => <li key={repo.id}>{repo.full_name}</li>) }
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
