import { takeEvery } from 'redux-saga/effects';
import { COURSES_FETCH, COURSE_EDIT, COURSE_ADD, COURSE_REMOVE } from '../../actions/courses';
import fetch from './fetch';
import edit from './edit';
import create from './create';
import remove from './remove';

export default function* saga () {
  yield takeEvery(COURSES_FETCH, fetch);
  yield takeEvery(COURSE_EDIT, edit);
  yield takeEvery(COURSE_ADD, create);
  yield takeEvery(COURSE_REMOVE, remove);
};