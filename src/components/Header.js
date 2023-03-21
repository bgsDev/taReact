import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FiHome, FiLogIn, FiPenTool,
} from 'react-icons/fi';

function Header({ nmApp }) {
  return (
    <div className="flexDR jcBetween cHeader p10 fz15 QuicksandBold">
      <span className="fz25 talgC algSC">{nmApp}</span>
      <div className="flexDR">
        <Link to="/" className="flexDC pkk10 jcCenter algIC btnLink">
          <FiHome />
          <span>Home</span>
        </Link>
        <Link to="/login" className="flexDC pkk10 jcCenter algIC btnLink">
          <FiLogIn />
          <span>Login</span>
        </Link>
        <Link to="/register" className="flexDC pkk10 jcCenter algIC btnLink">
          <FiPenTool />
          <span>Register</span>
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  nmApp: PropTypes.string.isRequired,
};

export default Header;
