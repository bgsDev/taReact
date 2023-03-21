/* eslint-disable react/prop-types */
import React from 'react';
import { FiKey, FiMail, FiUser } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useInput } from '../hooks/useInput';
import { FinputG } from './Finput';

function Cregister({ oncForm }) {
  const [user, setUser] = useInput('');
  const [email, setEmail] = useInput('');
  const [pass, setPass] = useInput('');
  return (
    <form>
      <FinputG
        icon={<FiUser />}
        clsIcon="minWinForm cblack"
        cls=""
        plac="User"
        type="text"
        value={user}
        onchange={setUser}
      />
      <FinputG
        icon={<FiMail />}
        clsIcon="minWinForm cblack "
        cls=" cblack"
        plac="Email"
        type="email"
        value={email}
        onchange={setEmail}
      />
      <FinputG
        icon={<FiKey />}
        clsIcon="minWinForm cblack"
        cls=""
        plac="password"
        type="password"
        value={pass}
        onchange={setPass}
      />
      <br />
      <button type="button" className="btnLink" onClick={() => oncForm({ user, email, pass })}>Daftar</button>
    </form>
  );
}
Cregister.propTypes = {
  oncForm: PropTypes.string.isRequired,
};
export default Cregister;
