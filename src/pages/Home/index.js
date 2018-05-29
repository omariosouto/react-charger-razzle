import React, { Component } from 'react';
import Helmet from 'react-helmet'
import logo from '../../assets/img/react.svg';
import './Home.css';
import NavMenu from '../../components/NavMenu'
import { connect } from 'react-redux'

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

  componentDidMount() {
    if(this.props.repos.length === 0) {
      this.props.carregaRepos()
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
            { this.props.repos.map((repo) => <li key={repo.id}>{repo.full_name}</li>) }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (stateDaStore) => {
  return {
    repos: stateDaStore.repos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    carregaRepos: () => {
      fetch('https://api.github.com/users/omariosouto/repos').then((response) => response.json())
        .then((response) => {
          console.log('disparou o carrega repos :)', response)
          dispatch({ type: 'CARREGA_REPOS', repos: response })
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)