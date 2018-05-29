import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu = () => {
    return (
        <ul className="Home-resources">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/404crosstest">404 Page</Link>
          </li>
          <li>
            <a href="https://react-charger.gitbook.io/project/">Docs</a>
          </li>
          <li>
            <a href="https://github.com/omariosouto/react-charger-razzle">Issues</a>
          </li>
        </ul>
    )
}

export default NavMenu