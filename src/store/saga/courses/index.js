import { takeEvery } from 'redux-saga/effects';
import { COURSES_FETCH } from '../../actions/courses';
import fetch from './fetch';

export default function* saga () {
  yield takeEvery(COURSES_FETCH, fetch);
};