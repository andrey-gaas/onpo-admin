import { takeEvery } from 'redux-saga/effects';
import { AUTH_FETCH } from '../../actions/auth';
import authFetch from './fetch';

export default function* saga () {
  yield takeEvery(AUTH_FETCH, authFetch);
};