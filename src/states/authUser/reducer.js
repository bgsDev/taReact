import { authType } from './action';

function authUserReducer(authUser = null, act = {}) {
  switch (act.type) {
    case authType.set:
      return act.payload.authUser;
    case authType.unset:
      return null;
    default:
      return authUser;
  }
}

export default authUserReducer;
