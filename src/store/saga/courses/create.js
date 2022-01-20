import { call, put } from 'redux-saga/effects';
import { courseAddSuccess, courseAddFail } from '../../AC/courses';
import CoursesApi from '../../../api/Courses';

function* create({ data }) {
  try {
    const response = yield call(CoursesApi.add, data);

    if (response.status === 200) {
      yield put(courseAddSuccess(response.data));
    }

    if (response.status === 500) {
      yield put(courseAddFail(data.id, response.data));
    }
  } catch(e) {
    console.error(e);
    yield put(courseAddFail(data.id, e.message));
  }
}

export default create;