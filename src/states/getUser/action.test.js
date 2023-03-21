/**
 * skenario test
 *
 * - actSetAuthUser thunk
 *  - should dispatch action correctly when data fetching success
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { getDataUser, setDataUser } from './action';

const allUserRespon = [
  {
    id: 'u1',
    name: 'Doe',
    email: 'Doe@example.com',
    avatar: 'https://generated-image-url.jpg',
  }, {
    id: 'u2',
    name: 'John',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

describe('getDataUser thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api.getDataUser = api.getDataUser;
  });
  afterEach(() => {
    // restore original implementation
    api.getDataUser = api.getDataUser;

    // delete backup
    delete api.getDataUser;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    api.getDataUser = () => Promise.resolve(allUserRespon);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await getDataUser()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setDataUser(allUserRespon));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
