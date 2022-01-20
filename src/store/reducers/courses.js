import * as actions from '../actions/courses';

const initialState = {
  list: null,
  errors: {},
  status: null,
};

function coursesReducer(state = initialState, action) {
  switch(action.type) {
    case actions.COURSES_FETCH_SUCCESS:
      return { ...state, list: action.data };

    case actions.COURSES_FETCH_FAIL:
      return { ...state, error: { ...state.error, list: action.error } };

    case actions.COURSE_ADD_SUCCESS:
      return { ...state, list: [...state.list, action.data], status: 'success' };

    case actions.COURSE_ADD_FAIL:
      return { ...state, status: 'fail' };

    case actions.COURSE_ADD_STATUS:
      return { ...state, status: action.status };

    case actions.COURSE_EDIT_SUCCESS:
      return { ...state, list: state.list.map(item => item.id !== action.data.id ? item : action.data) };

    case actions.COURSE_EDIT_FAIL:
      return { ...state, error: { ...state.error, [action.id]: action.error } };

    case actions.COURSE_REMOVE_SUCCESS:
      return { ...state, list: state.list.filter(item => item.id !== action.id) };

    default:
      return state;
  }
}

export default coursesReducer;
