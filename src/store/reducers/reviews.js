import * as actions from '../actions/reviews';

const initialState = {
  list: null,
  error: {},
  status: null,
};

function reviewsReducer(state = initialState, action) {
  switch(action.type) {
    case actions.REVIEWS_FETCH_SUCCESS:
      return { ...state, list: action.data };

    case actions.REVIEWS_FETCH_FAIL:
      return { ...state, error: { ...state.error, list: action.error } };

    case actions.REVIEW_ADD_SUCCESS:
      return { ...state, list: [...state.list, action.data], status: 'success' };

    case actions.REVIEW_ADD_FAIL:
      return { ...state, status: 'fail' };

    case actions.REVIEW_ADD_STATUS:
      return { ...state, status: action.status };

    case actions.REVIEW_EDIT_SUCCESS:
      return { ...state, list: state.list.map(item => item.id !== action.data.id ? item : action.data) };

    case actions.REVIEW_EDIT_FAIL:
      return { ...state, error: { ...state.error, [action.id]: action.error } };

    default:
      return state;
  }
}

export default reviewsReducer;
