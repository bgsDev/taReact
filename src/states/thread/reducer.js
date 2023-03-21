/* eslint-disable max-len */
/**
 * @TODO: Define reducer for the isPreLoad state
 */
import { ActionType } from './action';

function threadReducer(thread = [], action = {}) {
  switch (action.type) {
    case ActionType.ALL_THREAD:
      return action.payload.thread;
    case ActionType.Detail_THREAD:
      return action.payload.thread;
    case ActionType.toggleVote:
      return thread.map((dt) => {
        if (dt.id === action.payload.treadId) {
          return {
            ...dt,
            upVotesBy: dt.upVotesBy.includes(action.payload.userId)
              ? dt.upVotesBy.filter((id) => id !== action.payload.userId)
              : dt.upVotesBy.concat([action.payload.userId]),
            downVotesBy: (dt.downVotesBy.includes(action.payload.userId) || !dt.upVotesBy.includes(action.payload.userId))
              ? dt.downVotesBy.filter((id) => id !== action.payload.userId)
              : dt.downVotesBy.concat([action.payload.userId]),
          };
        }
        return dt;
      });
    case ActionType.ADD_thread:
      return [action.payload.thread.threads, ...thread];
    default:
      return thread;
  }
}

export default threadReducer;
