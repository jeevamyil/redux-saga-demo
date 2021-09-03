import { actions } from "./ActionConstants";

const initialState = {
  todos: [],
};

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      return {
        ...state,
        todos: state.todos.concat(action.value),
      };

    case actions.REMOVE_ITEM:
      return {
        ...state,
        todos: state.todos.filter((item) => action.value !== item.id),
      };

    case actions.MARK_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id !== action.value ? item : { ...item, status: "finished" }
        ),
      };
    case actions.CLEAR_ALL:
      return {
        ...state,
        todos: [],
      };
    case actions.FETCH_ALL:
      return {
        ...state,

        todos: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
