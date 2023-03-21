/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { getDataUser } from '../getUser/action';

const ActionType = {
  ALL_THREAD: 'ALL_THREAD',
  toggleVote: 'updVote',
  ADD_thread: 'ADD_thread',
};

function actSetThread(thread) {
  return {
    type: ActionType.ALL_THREAD,
    payload: {
      thread: thread.threads,
    },
  };
}
function actAllThread() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      dispatch(getDataUser());
      const thread = await api.allThread();
      dispatch(actSetThread(thread));
    } catch (error) {
      // fallback process
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function actSendThread({ title, category, body }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.addThread({ title, category, body });
      dispatch(actAllThread());
    } catch (error) {
      // fallback process
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function toggleVoteActionCreator({ treadId, userId }) {
  return {
    type: ActionType.toggleVote,
    payload: {
      treadId,
      userId,
    },
  };
}
function actOnvote({ id }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    toggleVoteActionCreator({ treadId: id, userId: authUser.id });
    dispatch(showLoading());
    try {
      await api.actVote({ id, vote: 'up-vote' });
      dispatch(actAllThread());
    } catch (error) {
      // fallback process
      toggleVoteActionCreator({ treadId: id, userId: authUser.id });
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function actUnvote({ id }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    toggleVoteActionCreator({ treadId: id, userId: authUser.id });
    dispatch(showLoading());
    try {
      await api.actVote({ id, vote: 'down-vote' });
      dispatch(actAllThread());
    } catch (error) {
      // fallback process
      toggleVoteActionCreator({ treadId: id, userId: authUser.id });
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function actNeutralvote({ id }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    toggleVoteActionCreator({ treadId: id, userId: authUser.id });
    dispatch(showLoading());
    try {
      await api.actVote({ id, vote: 'neutral-vote' });
      dispatch(actAllThread());
    } catch (error) {
      // fallback process
      toggleVoteActionCreator({ treadId: id, userId: authUser.id });
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
export {
  ActionType,
  actSetThread,
  actSendThread,
  actAllThread,
  actOnvote,
  actUnvote,
  actNeutralvote,
};
