/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Finput({
  type, plac, value, onchange, cls,
}) {
  return (
    <input className={cls} type={type} placeholder={plac} value={value} onChange={onchange} />
  );
}
Finput.propTypes = {
  type: PropTypes.string.isRequired,
  plac: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
};

function FinputG({
  type, plac, value, onchange, cls, icon, clsIcon,
}) {
  return (
    <div className="input-group">
      <span className={`input-group-addon ${clsIcon}`}>
        {icon}
      </span>
      {Finput({
        type, plac, value, onchange, cls,
      })}
    </div>
  );
}
FinputG.propTypes = {
  type: PropTypes.string.isRequired,
  plac: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired,
  clsIcon: PropTypes.string.isRequired,
};

function Fselect({
  // const options = [
  //   { value: 'introduction', label: 'introduction' },
  //   { value: 'React', label: 'React' },
  //   { value: 'Java Script', label: 'Java Script' },
  //   { value: 'Java', label: 'Java' },
  // ];
  // const [selected, setSelected] = useInput(null);
  // <Fselect
  //   icon={<FiSearch />}
  //   clsIcon="minWinForm cblack"
  //   cls=""
  //   data={options}
  //   value={user}
  //   onchange={setUser}
  // />
  value, onchange, cls, icon, clsIcon, data,
}) {
  return (
    <div className="input-group maxBtnLink">
      <span className={`input-group-addon ${clsIcon}`}>
        {icon}
      </span>
      <select className={cls} value={value} onChange={onchange}>
        {
          data.map((v) => (
            <option key={v.value}>{v.label}</option>
          ))
        }
      </select>
    </div>
  );
}
Fselect.propTypes = {
  value: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired,
  clsIcon: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

function FcontentEditable({
  plac, value, onchange, cls, icon, clsIcon,
}) {
  return (
    <div className="input-group maxBtnLink">
      <span className={`input-group-addon ${clsIcon}`}>
        {icon}
      </span>
      <div
        className={`contentEditable ${cls}`}
        data-placeholder={plac}
        contentEditable
        value={value}
        onInput={onchange}
      />
    </div>
  );
}
FinputG.propTypes = {
  plac: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired,
  clsIcon: PropTypes.string.isRequired,
};
export {
  Finput,
  FinputG,
  Fselect,
  FcontentEditable,
};
