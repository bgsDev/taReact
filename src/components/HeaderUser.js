/* eslint-disable react/button-has-type */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FiHome, FiSend, FiSearch, FiLogOut,
} from 'react-icons/fi';
import { setSearch } from '../states/search/action';
import { actUnsetAuthUser } from '../states/authUser/action';
import { FinputG } from './Finput';

function HeaderUser({ nmApp }) {
  const { search } = useSelector((state) => state);
  const dispatch = useDispatch();
  const oncSearch = ({ target }) => {
    dispatch(setSearch(target.value));
  };
  const oncLogout = () => {
    dispatch(actUnsetAuthUser());
  };
  return (
    <div className="grid3row jcBetween cHeader p10 fz15 QuicksandBold">
      <span className="fz25 talgC algSC">{nmApp}</span>
      <div className="flexDR jcCenter">
        <Link to="/" className="flexDC pkk10 jcCenter algIC talgC btnLink">
          <FiHome />
          <span>Home</span>
        </Link>
        <Link to="/leaderboards" className="flexDC pkk10 jcCenter algIC talgC btnLink">
          <FiSend />
          <span>List Member</span>
        </Link>
        <button onClick={oncLogout} className="flexDC bbnone pkk10 jcCenter talgC algIC btnLink">
          <FiLogOut />
          <span><b>Logout</b></span>
        </button>
      </div>
      <div className="maxBtnLink algSC m3">
        <FinputG
          icon={<FiSearch />}
          clsIcon="minWinForm cblack bsearch"
          cls="wxfull"
          plac="search.."
          type="text"
          value={search}
          onchange={oncSearch}
        />
      </div>
    </div>
  );
}

HeaderUser.propTypes = {
  nmApp: PropTypes.string.isRequired,
};

export default HeaderUser;
