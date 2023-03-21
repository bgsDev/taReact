import { leaderType } from './action';

function leaderboardsReducer(leaderboards = [], act = {}) {
  switch (act.type) {
    case leaderType.set:
      return act.payload.leaderboards;
    default:
      return leaderboards;
  }
}

export default leaderboardsReducer;
