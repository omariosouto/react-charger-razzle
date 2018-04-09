import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import './About.css';

class About extends Component {
  state = {
    counter: 0
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div className="About">
        <Helmet title="React SSR - Página About" />
        <div className="About-header">
          <h2>About Page</h2>
        </div>
        <p className="About-intro">
          Hi, this is an about page, we don't have too much information, this is just an example :)
        </p>
        <ul className="About-resources">
          <li>
            <Link to="/">Home</Link>
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

          <div>
            {this.state.counter}
            <button onClick={this.decrement}>increment</button>
            <button onClick={this.increment}>decrement</button>
          </div>
        </ul>
      </div>
    );
  }
}

export default About;
