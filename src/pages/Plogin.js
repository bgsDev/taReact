/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { JudulHr } from '../components/sf/JudulHr';
import { actSetAuthUser } from '../states/authUser/action';
import Clogin from '../components/Clogin';

function Plogin() {
  const dispatch = useDispatch();
  const oncForm = ({ email, pass }) => {
    dispatch(actSetAuthUser({ email, password: pass }));
  };
  return (
    <div className="boxRadius15  QuicksandLight ">
      <JudulHr judul="Login" cls="talgC" />
      <Clogin oncForm={oncForm} />
      <br />
      <br />
      <p>
        Buat akun baru?
        <Link to="/register" className="btnLink"><b> register</b></Link>
      </p>
    </div>
  );
}
export default Plogin;
