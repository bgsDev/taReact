/* eslint-disable no-undef */
/**
 * @TODO: Define reducer for the isPreLoad state
 */
import { ActionType } from './action';

function threadDetailReducer(thread = [], action = {}) {
  switch (action.type) {
    case ActionType.Detail_THREAD:
      return action.payload.threadDetail;
    case ActionType.tvDetail:
      return {
        ...thread,
        upVotesBy: thread.upVotesBy.includes(action.payload.userId)
          ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
          : thread.upVotesBy.concat([action.payload.userId]),
        downVotesBy: thread.downVotesBy.includes(action.payload.userId)
          ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
          : thread.downVotesBy.concat([action.payload.userId]),
      };
    case ActionType.tvComment:
      return {
        ...thread,
        comments: thread.comments.map((dt) => {
          if (dt.id === action.payload.commentId) {
            return {
              ...dt,
              upVotesBy: dt.upVotesBy.includes(action.payload.userId)
                ? dt.upVotesBy.filter((id) => id !== action.payload.userId)
                : dt.upVotesBy.concat([action.payload.userId]),
              downVotesBy: dt.downVotesBy.includes(action.payload.userId)
                ? dt.downVotesBy.filter((id) => id !== action.payload.userId)
                : dt.downVotesBy.concat([action.payload.userId]),
            };
          }
          return dt;
        }),
      };
    default:
      return thread;
  }
}

export default threadDetailReducer;
