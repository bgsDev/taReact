/**
 * @TODO: Define reducer for the users state
 */
import { ActionType } from './action';

function alluserReducer(users = [], action = {}) {
  switch (action.type) {
    case ActionType.All_USERS:
      return action.payload.users;
    default:
      return users;
  }
}

export default alluserReducer;
