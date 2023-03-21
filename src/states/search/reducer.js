/**
 * @TODO: Define reducer for the isPreLoad state
 */
import { ActionType } from './action';

function searchReducer(search = '', action = {}) {
  switch (action.type) {
    case ActionType.SET_SEARCH:
      return action.payload.search;
    default:
      return search;
  }
}

export default searchReducer;
