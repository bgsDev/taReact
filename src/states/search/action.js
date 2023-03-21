/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */
const ActionType = {
  SET_SEARCH: 'SET_SEARCH',
};

function setSearch(search) {
  return {
    type: ActionType.SET_SEARCH,
    payload: {
      search,
    },
  };
}

export {
  ActionType,
  setSearch,
};
