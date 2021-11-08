import { AUTH_FETCH_SUCCESS, AUTH_FETCH_FAIL } from '../actions/auth';

const initialState = {
  loading: true,
  isAuth: false,
};

function authReducer(state = initialState, action) {
  switch(action.type) {
    case AUTH_FETCH_SUCCESS:
      return { ...state, isAuth: true, loading: false };
    case AUTH_FETCH_FAIL:
      return { ...state, isAuth: false, loading: false };
    default: return state;
  }
}

export default authReducer;
