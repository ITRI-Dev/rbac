const initState = {};

const actions = (state = initState, action) => {
  switch (action.type) {
    case "add": {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export { actions };
