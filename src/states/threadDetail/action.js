/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  Detail_THREAD: 'Detail_THREAD',
  tvDetail: 'toggleVoteDetail',
  tvComment: 'toggleVoteDetailComment',
};
function actSetThreadDetail(thread) {
  return {
    type: ActionType.Detail_THREAD,
    payload: {
      threadDetail: thread.detailThread,
    },
  };
}
function actDetailThread({ id }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.detailThread({ id });
      dispatch(actSetThreadDetail(thread));
    } catch (error) {
      // fallback process
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function toggleVoteDetailActionCreator({ userId }) {
  return {
    type: ActionType.tvDetail,
    payload: {
      userId,
    },
  };
}
function toggleVoteCommantActionCreator({ commentId, userId }) {
  return {
    type: ActionType.tvComment,
    payload: {
      commentId,
      userId,
    },
  };
}

function actOnvote({ id }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleVoteDetailActionCreator({ userId: authUser.id }));
    dispatch(showLoading());
    try {
      await api.actVote({ id, vote: 'up-vote' });
      dispatch(actDetailThread({ id }));
    } catch (error) {
      // fallback process
      dispatch(toggleVoteDetailActionCreator({ userId: authUser.id }));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function actUnvote({ id }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleVoteDetailActionCreator({ userId: authUser.id }));
    dispatch(showLoading());
    try {
      await api.actVote({ id, vote: 'down-vote' });
      dispatch(actDetailThread({ id }));
    } catch (error) {
      // fallback process
      dispatch(toggleVoteDetailActionCreator({ userId: authUser.id }));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function actDetailUnvote({ id, idComment }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleVoteCommantActionCreator({ userId: authUser.id, commentId: idComment }));
    dispatch(showLoading());
    try {
      await api.actVoteDetail({ id, idComment, vote: 'down-vote' });
      dispatch(actDetailThread({ id }));
    } catch (error) {
      // fallback process
      dispatch(toggleVoteCommantActionCreator({ userId: authUser.id, commentId: idComment }));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function actDetailOnvote({ id, idComment }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleVoteCommantActionCreator({ userId: authUser.id, commentId: idComment }));
    dispatch(showLoading());
    try {
      await api.actVoteDetail({ id, idComment, vote: 'up-vote' });
      dispatch(actDetailThread({ id }));
    } catch (error) {
      // fallback process
      dispatch(toggleVoteCommantActionCreator({ userId: authUser.id, commentId: idComment }));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function actDetailNeutralvote({ id, idComment }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleVoteCommantActionCreator({ userId: authUser.id, commentId: idComment }));
    dispatch(showLoading());
    try {
      await api.actVoteDetail({ id, idComment, vote: 'neutral-vote' });
      dispatch(actDetailThread({ id }));
    } catch (error) {
      // fallback process
      dispatch(toggleVoteCommantActionCreator({ userId: authUser.id, commentId: idComment }));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function actAddNewComment({ id, content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.actAddNewComment({ id, content });
      dispatch(actDetailThread({ id }));
    } catch (error) {
      // fallback process
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
export {
  ActionType,
  actSetThreadDetail,
  actOnvote,
  actUnvote,
  actDetailThread,
  actDetailUnvote,
  actDetailOnvote,
  actDetailNeutralvote,
  actAddNewComment,
};
