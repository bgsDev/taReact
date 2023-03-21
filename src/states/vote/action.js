/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { actAllThread } from '../thread/action';

function actOnvote({ id }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.actVote({ id, vote: 'up-vote' });
      dispatch(actAllThread());
    } catch (error) {
      // fallback process
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function actUnvote({ id }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.actVote({ id, vote: 'down-vote' });
      dispatch(actAllThread());
    } catch (error) {
      // fallback process
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function actNeutralvote({ id }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.actVote({ id, vote: 'neutral-vote' });
      dispatch(actAllThread());
    } catch (error) {
      // fallback process
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  actOnvote,
  actUnvote,
  actNeutralvote,
};
