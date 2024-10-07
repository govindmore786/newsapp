import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class navbar extends Component {
  render() {
    return (
      <div>
        <nav>
        <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/business'>Business</Link>
            </li>
            <li>
              <Link to='/entertainment'>Entertainment</Link>
            </li>
            <li>
              <Link to='/general'>General</Link>
            </li>
            <li>
              <Link to='/health'>Health</Link>
            </li>
            <li>
              <Link to='/science'>Science</Link>
            </li>
        </nav>
      </div>
    )
  }
}

export default navbar
