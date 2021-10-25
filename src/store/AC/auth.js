import { AUTH_FETCH, AUTH_FETCH_SUCCESS, AUTH_FETCH_FAIL } from '../actions/auth';

export const authFetch = () => ({ type: AUTH_FETCH });
export const authSuccess = () => ({ type: AUTH_FETCH_SUCCESS });
export const authFail = () => ({ type: AUTH_FETCH_FAIL });
