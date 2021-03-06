import React from 'react';
import {Link} from 'react-router-dom'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

const Nav = () => (
  <div className="nav">
    <div className="nav-col-left">
      <Link to={'/'} className="link" id="home-link">
        MUCHO GUSTO
      </Link>
    </div>
    <div className="nav-col-right">
      <div className="dropdown">
        <button className="dropbtn">
          <div className="nav-icon"></div>
          <div className="nav-icon"></div>
          <div className="nav-icon"></div>
        </button>
        <div className="dropdown-content">
          <Link to={'/'} className="link" id="menu-link">HOME</Link>
          <Link to={'/chat'} className="link" id="menu-link">CHAT</Link>
          <Link to={'/faqs'} className="link" id="menu-link">FAQS</Link>
          <Link to={'/team'} className="link" id="menu-link">TEAM</Link>
          <Link to={'/contact'} className="link" id="menu-link">CONTACT</Link>

        </div>
      </div>
    </div>
  </div>
)

export default Nav;

