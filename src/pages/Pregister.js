import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { JudulHr } from '../components/sf/JudulHr';
import { actRegisterUser } from '../states/users/action';
import Cregister from '../components/Cregister';

function Pregister() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const oncForm = ({ user, email, pass }) => {
    dispatch(actRegisterUser({ name: user, email, password: pass }));
    navigate('/login');
  };
  return (
    <form className="boxRadius15 QuicksandLight" onSubmit={oncForm}>
      <JudulHr judul="Register" cls="talgC" />
      <Cregister oncForm={oncForm} />
      <br />
      <br />
      <p className="cblack">
        Kembali ke ?
        <Link to="/login" className="btnLink"><b> Login</b></Link>
      </p>
    </form>
  );
}
export default Pregister;
