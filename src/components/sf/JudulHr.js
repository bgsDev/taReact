import React from 'react';
import PropTypes from 'prop-types';

function JudulHr({ judul, cls }) {
  return (
    <div>
      <h2 className={cls}>{judul}</h2>
      <hr />
    </div>
  );
}
JudulHr.propTypes = {
  judul: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
};

function Judul({ judul, cls }) {
  return (
    <div className={cls}>
      <h2>{judul}</h2>
    </div>
  );
}
Judul.propTypes = {
  judul: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
};
export {
  JudulHr,
  Judul,
};
