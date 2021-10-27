import * as actions from '../actions/reviews';

const initialState = {
  list: null,
  error: null,
};

function reviewsReducer(state = initialState, action) {
  switch(action.type) {
    case actions.REVIEWS_FETCH_SUCCESS:
      return { ...state, list: action.data };

    case actions.REVIEWS_FETCH_FAIL:
      return { ...state, error: action.error };

    case actions.REVIEW_ADD_SUCCESS:
      return { ...state, list: [...state.list, action.data] };

    default:
      return state;
  }
}

export default reviewsReducer;
