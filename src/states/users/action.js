/**
 * @TODO: Define all the actions (creator) for the users state
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function actRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const user = await api.register({ name, email, password });
      receiveUsersActionCreator(user);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  actRegisterUser,
};
