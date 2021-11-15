import * as actions from '../actions/users';

const initialState = {
  list: null,
  error: {},
  status: null,
};

function usersReducer(state = initialState, action) {
  switch(action.type) {
    case actions.USERS_FETCH_SUCCESS:
      return { ...state, list: action.data };

    case actions.USERS_FETCH_FAIL:
      return { ...state, error: { ...state.error, list: action.error } };

    case actions.USER_EDIT_SUCCESS:
      return { ...state, list: state.list.map(item => item.id !== action.data.id ? item : action.data) };

    case actions.USER_EDIT_FAIL:
      return { ...state, error: { ...state.error, [action.id]: action.error } };

    case actions.USER_REMOVE_SUCCESS:
      return { ...state, list: state.list.filter(item => item.id !== action.id) };

    default:
      return state;
  }
}

export default usersReducer;
