// Header.js
import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <nav className="navbar navbar-static-top">
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
            <li>
              <Link to="/other-games">Play other games</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
