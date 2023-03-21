/* eslint-disable no-unreachable */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const leaderType = {
  set: 'setLeaderboards',
};

function setActionCreator(leaderboards) {
  return {
    type: leaderType.set,
    payload: {
      leaderboards,
    },
  };
}

function actGetLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.getLeaderboards();
      dispatch(setActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  leaderType,
  actGetLeaderboards,
};
