import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadReducer from './thread/reducer';
import threadDetailReducer from './threadDetail/reducer';
import searchReducer from './search/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import alluserReducer from './getUser/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    thread: threadReducer,
    search: searchReducer,
    threadDetail: threadDetailReducer,
    loadingBar: loadingBarReducer,
    leaderboards: leaderboardsReducer,
    users: alluserReducer,
  },
});

export default store;
