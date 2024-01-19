const initialState = {
  todos: [],
  todosLoading: false
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'load/todos/start':
      return {
        ...state,
        todosLoading: true
      };

    case 'load/todos/success':
      return {
        ...state,
        todosLoading: false,
        todos: action.payload
      };

    default:
      return state;
  }
};
