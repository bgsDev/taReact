/**
 * test scenario for thread
 *
 * - talkReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the thread when given by ALL_THREAD action
 *  - should return the thread with the new thread when given by ADD_thread action
 *  - should return the thread with the toggled / update like when given by updVote action
 *
 */
import threadReducer from './reducer';

describe('reducer thread tester', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread when given by ALL_THREAD action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'ALL_THREAD',
      payload: {
        thread: {
          threads: [
            {
              id: 'thread-1',
              title: 'Thread Pertama',
              body: 'Ini adalah thread pertama',
              category: 'General',
              createdAt: '2021-06-21T07:00:00.000Z',
              ownerId: 'users-1',
              upVotesBy: [],
              downVotesBy: [],
              totalComments: 0,
            },
            {
              id: 'thread-2',
              title: 'Thread Kedua',
              body: 'Ini adalah thread kedua',
              category: 'General',
              createdAt: '2021-06-21T07:00:00.000Z',
              ownerId: 'users-2',
              upVotesBy: [],
              downVotesBy: [],
              totalComments: 0,
            },
          ],
        },
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.thread);
  });

  it('should return the thread with the new thread when given by ADD_thread action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-3',
        title: 'Thread 3',
        body: 'Ini adalah thread ke-3',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: 'ADD_thread',
      payload: {
        thread: {
          threads: [
            {
              id: 'thread-1',
              title: 'Thread Pertama',
              body: 'Ini adalah thread pertama',
              category: 'General',
              createdAt: '2021-06-21T07:00:00.000Z',
              ownerId: 'users-1',
              upVotesBy: [],
              downVotesBy: [],
              totalComments: 0,
            },
            {
              id: 'thread-2',
              title: 'Thread Kedua',
              body: 'Ini adalah thread kedua',
              category: 'General',
              createdAt: '2021-06-21T07:00:00.000Z',
              ownerId: 'users-2',
              upVotesBy: [],
              downVotesBy: [],
              totalComments: 0,
            },
          ],
        },
      },
    };
    // action
    const nextState = threadReducer(initialState, action);
    // assert
    expect(nextState).toEqual([action.payload.thread.threads, ...initialState]);
  });

  it('should return the thread with the toggled / update like when given by updVote action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-3',
        title: 'Thread 3',
        body: 'Ini adalah thread ke-3',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: 'updVote',
      payload: {
        treadId: 'thread-3',
        userId: 'users-1',
      },
    };
    // action: like talk
    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
    // action: unlike talk
    const nextState2 = threadReducer(nextState, action);
    // assert

    expect(nextState2).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });
});
