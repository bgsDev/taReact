/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setActionCreator } from '../authUser/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function actSetIsPreload(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function actPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      // preload process
      const authUser = await api.getOwnProfile();
      dispatch(setActionCreator(authUser));
    } catch (error) {
      // fallback process
      dispatch(setActionCreator(null));
    } finally {
      // end preload process
      dispatch(hideLoading());
      dispatch(actSetIsPreload(false));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  actSetIsPreload,
  actPreloadProcess,
};
