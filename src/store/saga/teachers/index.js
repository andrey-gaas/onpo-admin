import { takeEvery } from 'redux-saga/effects';
import { TEACHERS_FETCH } from '../../actions/teachers';
import fetch from './fetch';

export default function* saga () {
  yield takeEvery(TEACHERS_FETCH, fetch);
};