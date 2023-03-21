/* eslint-disable react/prop-types */
import React from 'react';
import { FiKey, FiMail } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useInput } from '../hooks/useInput';
import { FinputG } from './Finput';

function Clogin({ oncForm }) {
  const [email, setEmail] = useInput('');
  const [pass, setPass] = useInput('');
  return (
    <form>
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
      <button type="button" className="btnLink" onClick={() => oncForm({ email, pass })}>Login</button>
    </form>
  );
}
Clogin.propTypes = {
  oncForm: PropTypes.func.isRequired,
};
export default Clogin;
