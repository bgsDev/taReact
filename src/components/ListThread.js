/* eslint-disable no-empty */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ItemThread from './ItemTheread';

function ListThread({
  thread, onvote, unvote,
}) {
  return thread.map((dt) => (
    <ItemThread key={dt.id} {...dt} onvote={onvote} unvote={unvote} />
  ));
}

ListThread.propTypes = {
  thread: PropTypes.array.isRequired,
  onvote: PropTypes.func.isRequired,
  unvote: PropTypes.func.isRequired,
};

export default ListThread;
