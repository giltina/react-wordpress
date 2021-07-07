import React, { Component } from 'react'
import {Link} from '@reach/router'

export class Navbar extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-sm bg-light">
        {/* Links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
            </div>
        )
    }
}

export default Navbar
