import { takeEvery } from 'redux-saga/effects';
import { REVIEWS_FETCH, REVIEW_EDIT } from '../../actions/reviews';
import fetch from './fetch';
import edit from './edit';

export default function* saga () {
  yield takeEvery(REVIEWS_FETCH, fetch);
  yield takeEvery(REVIEW_EDIT, edit);
};