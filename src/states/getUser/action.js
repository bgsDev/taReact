/**
 * @TODO: Define all the actions (creator) for the users state
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  All_USERS: 'All_USERS',
};

function setDataUser(users) {
  return {
    type: ActionType.All_USERS,
    payload: {
      users: users.users,
    },
  };
}

function getDataUser() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getDataUser();
      dispatch(setDataUser(users));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setDataUser,
  getDataUser,
};
