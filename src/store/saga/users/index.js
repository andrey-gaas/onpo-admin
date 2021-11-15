import { takeEvery } from 'redux-saga/effects';
import { USERS_FETCH } from '../../actions/users';
import fetch from './fetch';
// import edit from './edit';
// import create from './create';
// import remove from './remove';

export default function* saga () {
  yield takeEvery(USERS_FETCH, fetch);
  // yield takeEvery(REVIEW_EDIT, edit);
  // yield takeEvery(REVIEW_REMOVE, remove);
};