/**
 * skenario test
 *
 * - actSetAuthUser thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { actSetAuthUser, setActionCreator } from './action';

const loginRespon = {
  id: 'u2',
  name: 'John',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const login = {
  email: 'bgs@bgs.com',
  password: 'bgs@bgs.com',
};

describe('set auth User thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api.getOwnProfile = api.getOwnProfile;
  });
  afterEach(() => {
    // restore original implementation
    api.getOwnProfile = api.getOwnProfile;

    // delete backup
    delete api.getOwnProfile;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    api.getOwnProfile = () => Promise.resolve(loginRespon);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await actSetAuthUser(login)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setActionCreator(loginRespon));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
