import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => (
  <nav className="main-nav-wrapper">
    <ul className="main-nav">
      <li className="main-nav__item">
        <NavLink exact activeClassName="main-nav__item--active main-nav__item--red" to="/">
          Home
        </NavLink>
      </li>
      <li className="main-nav__item">
        <NavLink activeClassName="main-nav__item--active main-nav__item--red" to="/battle">
          Battle
        </NavLink>
      </li>
      <li className="main-nav__item">
        <NavLink activeClassName="main-nav__item--active main-nav__item--red" to="/popular">
          Popular
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default MainNav;
