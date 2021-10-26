import { takeEvery } from 'redux-saga/effects';
import { REVIEWS_FETCH } from '../../actions/reviews';
import fetch from './fetch';

export default function* saga () {
  yield takeEvery(REVIEWS_FETCH, fetch);
};