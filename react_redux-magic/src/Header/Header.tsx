import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <ul className="nav-list">
        <li className="nav-list__item">
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </header>
  );
}
