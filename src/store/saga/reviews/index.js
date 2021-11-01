import { takeEvery } from 'redux-saga/effects';
import { REVIEWS_FETCH, REVIEW_EDIT, REVIEW_ADD } from '../../actions/reviews';
import fetch from './fetch';
import edit from './edit';
import create from './create';

export default function* saga () {
  yield takeEvery(REVIEWS_FETCH, fetch);
  yield takeEvery(REVIEW_EDIT, edit);
  yield takeEvery(REVIEW_ADD, create);
};