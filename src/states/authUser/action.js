/* eslint-disable no-unreachable */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const authType = {
  set: 'setAuth',
  unset: 'unsetAuth',
};

function setActionCreator(authUser) {
  return {
    type: authType.set,
    payload: {
      authUser,
    },
  };
}
function unsetActionCreator(user) {
  return {
    type: authType.unset,
    payload: {
      authUser: null,
    },
  };
}

function actSetAuthUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();
      dispatch(setActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function actUnsetAuthUser() {
  return async (dispatch) => {
    dispatch(unsetActionCreator());
    api.putAccessToken('');
  };
}

export {
  authType,
  actSetAuthUser,
  actUnsetAuthUser,
  setActionCreator,
};
