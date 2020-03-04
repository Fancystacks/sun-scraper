import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Landing extends Component {
  // sends user back to landing page after pressing logout
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push(`/`);
  }

  render() {
    // sends user to the register page once clicked
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )

    // sends user to the profile page once clicked
    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/input" className="nav-link">
            Input
          </Link>
        </li>
        <li className="nav-item">
          <a href="/#" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-0">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing);