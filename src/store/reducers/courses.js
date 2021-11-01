import * as actions from '../actions/courses';

const initialState = {
  list: null,
  errors: {},
};

function coursesReducer(state = initialState, action) {
  switch(action.type) {
    case actions.COURSES_FETCH_SUCCESS:
      return { ...state, list: action.data };

    case actions.COURSES_FETCH_FAIL:
      return { ...state, error: { ...state.error, list: action.error } };

    default:
      return state;
  }
}

export default coursesReducer;
