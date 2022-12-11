import { Icon } from '@mui/material';
import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">Logo</div>
      <div className="navbar__search">search</div>
      <div className="navbar__items">
        <ul>
          <li>ST</li>
          <li>
            <Icon>people</Icon> Wishlist
          </li>
          <li>CG Categories</li>
          <li>CR Cart</li>
          <li>UR User</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
