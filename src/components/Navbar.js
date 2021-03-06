import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Rzhengblogs" style={{ width: '16rem', maxHeight: '5rem', height: '5rem' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/tech">
          Tech
        </Link>
        <Link className="navbar-item" to="/philosophy">
          Philosophy
        </Link>
        <Link className="navbar-item" to="/challenge">
          Challenge
        </Link>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://github.com/bettervu/" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
